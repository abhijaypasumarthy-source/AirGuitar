# System Diagrams

## 1. System Architecture Diagram

This diagram provides a high-level overview of the entire Air Guitar system, showcasing the two primary modules (Left and Right Gloves) and their communication protocol.

```mermaid
graph TD
    subgraph Left Glove - Chord Selection
        M[Magnet on Thumb]
        R1[Index: Reed Switch]
        R2[Middle: Reed Switch]
        R3[Ring: Reed Switch]
        R4[Pinky: Reed Switch]
        ESP32C3[ESP32-C3 SuperMini]
        OLED[0.96 OLED Display]
        
        M -. Magnetic Field .-> R1
        M -. Magnetic Field .-> R2
        M -. Magnetic Field .-> R3
        M -. Magnetic Field .-> R4
        
        R1 --> ESP32C3
        R2 --> ESP32C3
        R3 --> ESP32C3
        R4 --> ESP32C3
        
        ESP32C3 --> OLED
    end

    subgraph Right Glove - Strumming
        MPU[MPU6050 IMU]
        ESP32V1[ESP32 DevKit V1]
        
        MPU -- I2C --> ESP32V1
    end

    subgraph Audio Processing Unit
        Host[Audio Synthesizer / Smartphone]
        Speaker[Speaker/Headphones]
        
        Host --> Speaker
    end

    ESP32C3 -- BLE: Active Chord --> Host
    ESP32V1 -- BLE: Strum Event --> Host
```

## 2. Component Diagram

Illustrates the physical hardware components and their wired connections within each subsystem.

```mermaid
classDiagram
    class ESP32C3 {
        +GPIO Pins
        +I2C (SDA, SCL)
        +BLE Antenna
    }
    class ReedSwitchArray {
        +DigitalOut C_Major
        +DigitalOut G_Major
        +DigitalOut A_Minor
        +DigitalOut E_Minor
    }
    class OLED {
        +VCC
        +GND
        +SCL
        +SDA
    }
    class ESP32V1 {
        +GPIO Pins
        +I2C (SDA, SCL)
        +BLE Antenna
    }
    class MPU6050 {
        +VCC
        +GND
        +SCL
        +SDA
        +INT
    }
    
    ESP32C3 "1" -- "1" ReedSwitchArray : GPIO Connects
    ESP32C3 "1" -- "1" OLED : I2C Connects
    ESP32V1 "1" -- "1" MPU6050 : I2C Connects
```

## 3. Data Flow Diagram

Shows how data is generated, processed, and transformed into an action (sound).

```mermaid
sequenceDiagram
    participant User
    participant LeftGlove as Left Glove (ESP32-C3)
    participant RightGlove as Right Glove (ESP32)
    participant Host as Synthesizer
    
    User->>LeftGlove: Thumb touches Index Finger
    LeftGlove->>LeftGlove: Reed Switch 1 Closes
    LeftGlove->>LeftGlove: Map to C Major
    LeftGlove->>LeftGlove: Update OLED (Chord: C)
    LeftGlove-->>Host: BLE Transmit (Chord: C Major)
    
    User->>RightGlove: Wrist Rotates (Strum)
    RightGlove->>RightGlove: Read MPU6050 Gyro (GY)
    RightGlove->>RightGlove: Check abs(GY) > Threshold
    RightGlove-->>Host: BLE Transmit (Strum Event)
    
    Host->>Host: Combine Chord (C) + Strum
    Host->>User: Play C Major Sound
```
