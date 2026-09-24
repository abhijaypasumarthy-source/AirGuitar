# Hardware Setup & Wiring Guide

This document details the exact hardware components, pinouts, and physical construction required to replicate the Air Guitar.

## 1. Left Glove (Chord Selection)

**Components:**
*   **Microcontroller:** ESP32-C3 SuperMini
*   **Sensors:** 4x Magnetic Reed Switches, 1x Neodymium Magnet
*   **Display:** 0.96" I2C OLED Display
*   **Power:** 3.7V LiPo Battery (Future Scope)

**Wiring Guide (ESP32-C3):**

| Component | Pin | ESP32-C3 Pin | Note |
| :--- | :--- | :--- | :--- |
| OLED Display | VCC | 3.3V | Power |
| OLED Display | GND | GND | Ground |
| OLED Display | SCL | GPIO 9 | I2C Clock |
| OLED Display | SDA | GPIO 8 | I2C Data |
| Reed Switch 1 (Index) | Terminal 1 | 3.3V | Pull-down resistor on GPIO |
| Reed Switch 1 (Index) | Terminal 2 | GPIO 0 | Maps to C Major |
| Reed Switch 2 (Middle)| Terminal 1 | 3.3V | Pull-down resistor on GPIO |
| Reed Switch 2 (Middle)| Terminal 2 | GPIO 1 | Maps to G Major |
| Reed Switch 3 (Ring) | Terminal 1 | 3.3V | Pull-down resistor on GPIO |
| Reed Switch 3 (Ring) | Terminal 2 | GPIO 2 | Maps to A Minor |
| Reed Switch 4 (Pinky) | Terminal 1 | 3.3V | Pull-down resistor on GPIO |
| Reed Switch 4 (Pinky) | Terminal 2 | GPIO 3 | Maps to E Minor |

*Note: Ensure internal pull-down resistors are enabled in software, or add external 10kΩ pull-down resistors to ground to prevent floating pins.*

**Physical Assembly:**
1.  Sew or glue the neodymium magnet to the tip of the left thumb.
2.  Mount the reed switches on the inside of the distal phalanges of the index, middle, ring, and pinky fingers.
3.  Mount the ESP32-C3 and OLED on the back of the hand/wrist.

---

## 2. Right Glove (Strumming Detection)

**Components:**
*   **Microcontroller:** ESP32 DevKit V1 (38 Pin)
*   **Sensors:** MPU6050 (6-axis IMU)
*   **Power:** 3.7V LiPo Battery (Future Scope)

**Wiring Guide (ESP32 DevKit V1):**

| Component | Pin | ESP32 Pin | Note |
| :--- | :--- | :--- | :--- |
| MPU6050 | VCC | 3.3V | Do not use 5V unless module has regulator |
| MPU6050 | GND | GND | Ground |
| MPU6050 | SCL | D22 (GPIO 22) | Standard I2C Clock for ESP32 |
| MPU6050 | SDA | D21 (GPIO 21) | Standard I2C Data for ESP32 |
| MPU6050 | AD0 | GND | Sets I2C address to 0x68 |

**Physical Assembly:**
1.  Mount the MPU6050 sensor firmly to the back of the hand, near the knuckles, ensuring the Y-axis aligns with the wrist rotation.
2.  Mount the ESP32 DevKit V1 securely on the wrist strap.

---

## 3. Hardware Debugging Notes

*   **ESP32 Upload Issues:** If the ESP32 DevKit V1 fails to upload code, hold the `BOOT` button when the console says "Connecting...", release it once the upload starts.
*   **I2C Not Found:** If the MPU6050 is not detected, run an I2C scanner sketch. Ensure SDA/SCL are not swapped and pull-up resistors are present (most MPU6050 breakout boards include them).
