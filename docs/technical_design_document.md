# Technical Design Document (TDD)

## 1. Introduction
This document outlines the technical architecture, algorithms, and engineering decisions made during the development of the Air Guitar project. The system is designed to provide a low-latency, intuitive, stringless guitar playing experience using wearable technology.

## 2. Gesture Recognition & Algorithms

### 2.1 Chord Selection (Left Glove)
The left glove utilizes a magnetic switching matrix.
*   **Mechanism:** Reed switches normally remain open. When the neodymium magnet (thumb) comes within ~1cm, the magnetic field closes the circuit.
*   **Algorithm:** 
    ```cpp
    if (digitalRead(INDEX_PIN) == HIGH) activeChord = "C Major";
    else if (digitalRead(MIDDLE_PIN) == HIGH) activeChord = "G Major";
    // ... etc
    ```
*   **Debouncing:** Hardware debouncing (capacitors) or software debouncing (delay/millis checks) is applied to prevent multi-triggering.

### 2.2 Strum Detection (Right Glove)
Strum detection went through three iterations before arriving at the optimal solution.

#### Method 1: Push Button Strumming (Rejected)
*   **Design:** A button in the palm pressed against the thigh or air.
*   **Reason for Rejection:** Did not accurately simulate guitar biomechanics. Poor UX.

#### Method 2: Accelerometer-Based Strumming (Rejected)
*   **Design:** Utilizing AX, AY, AZ from the MPU6050.
*   **Reason for Rejection:** Accelerometers measure linear acceleration and gravity. Normal hand movements, walking, or repositioning the arm triggered false strums. Filtering out gravity while isolating strum spikes proved computationally heavy and unreliable.

#### Method 3: Gyroscope-Based Strumming (Selected)
*   **Design:** Utilizing GX, GY, GZ.
*   **Rationale:** Strumming a guitar is fundamentally a rapid rotational movement of the wrist. Gyroscopes measure angular velocity (degrees per second) directly.
*   **Algorithm:** 
    We isolate the Y-axis (GY), which corresponds to wrist flexion/extension in our mounting orientation.
    ```cpp
    int16_t raw_gy = readMPU6050_GY();
    if (abs(raw_gy) > STRUM_THRESHOLD) {
        if (millis() - lastStrumTime > COOLDOWN_PERIOD) {
            triggerStrum();
            lastStrumTime = millis();
        }
    }
    ```
*   **Future Enhancement:** Directional strumming.
    `raw_gy > 0` = Down Strum
    `raw_gy < 0` = Up Strum

## 3. Communication Architecture
*   **Protocol:** Bluetooth Low Energy (BLE)
*   **Topology:** The gloves act as BLE Clients/Peripherals, while the Audio Synthesizer (PC/Smartphone) acts as the BLE Server/Central.
*   **Payload Optimization:** To minimize latency, payloads are kept under 10 bytes (e.g., `C,1` for C Major, Strum Event).

## 4. Software Stack
*   **Language:** C++
*   **Framework:** Arduino Core for ESP32
*   **Libraries:** 
    *   `Wire.h` (I2C Communication)
    *   `Adafruit_GFX` / `Adafruit_SSD1306` (OLED)
    *   `BLEDevice.h` (ESP32 BLE)
