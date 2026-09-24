# Air Guitar 🎸

> A Wearable Gesture-Controlled Musical Instrument

Air Guitar is a cutting-edge wearable embedded systems project that empowers users to play the guitar without physical strings. By leveraging sensor fusion, gesture recognition, and Bluetooth Low Energy (BLE) communication, the system translates natural hand movements into musical chords and strumming actions.

## 🌟 Project Overview

The system consists of two smart gloves working in tandem to simulate a real guitar-playing experience:

1. **Left Glove (Chord Selection):** Detects finger positions using magnetic reed switches to select musical chords.
2. **Right Glove (Strumming Detection):** Uses a 6-axis MPU6050 gyroscope and accelerometer to detect wrist rotations, mapping them to strumming gestures.

## 🚀 Key Features

*   **Stringless Guitar Experience:** Play music naturally using intuitive gestures.
*   **Dual-Controller Architecture:** Utilizes an ESP32-C3 for chord selection and an ESP32 DevKit V1 for strum detection.
*   **Accurate Motion Sensing:** Implements a custom threshold-based strum detection algorithm using gyroscope data to eliminate false positives.
*   **Real-time OLED UI:** Displays the current operating mode, active chord, and battery status.
*   **Low-Latency BLE:** Ensures seamless communication between gloves and audio synthesizer.

## 🏗️ System Architecture

### Left Glove (Chord Selection)
*   **Microcontroller:** ESP32-C3 SuperMini
*   **Sensors:** Neodymium Magnet (Thumb) + Reed Switches (Fingers)
*   **Display:** 0.96" OLED
*   **Mechanism:** When the thumb approaches a finger, the magnetic field activates the respective reed switch. The ESP32-C3 maps this to a chord (e.g., Index -> C Major) and sets it as the active chord.

### Right Glove (Strumming Detection)
*   **Microcontroller:** ESP32 DevKit V1 (38 Pin)
*   **Sensors:** MPU6050 (Accelerometer + Gyroscope)
*   **Mechanism:** Focuses on the Gyroscope Y-axis (`GY`). If the absolute value of `GY` exceeds a calibrated threshold, a strum is detected. This effectively filters out linear movements and isolates rotational wrist motion.

## 🛠️ Technologies Used

*   **Hardware:** ESP32 DevKit V1, ESP32-C3 SuperMini, MPU6050, Reed Switches, OLED Display, Neodymium Magnets
*   **Software:** Arduino IDE, C++, Wire.h, MPU6050 Library
*   **Protocols:** I2C, Bluetooth Low Energy (BLE)

## 📁 Repository Structure

```text
AirGuitar/
├── docs/
│   ├── diagrams.md                 # Architecture & Flow diagrams
│   ├── hardware_and_wiring.md      # Setup & Wiring guide
│   └── technical_design_document.md # TDD & Algorithm details
├── marketing/
│   └── career_and_pitches.md       # Pitches, Resume points, LinkedIn content
├── website/
│   ├── index.html                  # Project landing page HTML
│   ├── style.css                   # Project landing page CSS
│   └── script.js                   # Project landing page JS
└── README.md                       # This file
```

## 🧠 Technical Challenges Solved

1.  **ESP32 Upload Failures:** Resolved wrong boot modes, serial timeouts, and missing COM ports by establishing a manual boot procedure and updating drivers.
2.  **MPU6050 Communication:** Fixed I2C sensor detection issues (address `0x68`) using I2C scanners and rigorous wiring verification.
3.  **Sensor Debugging:** Eliminated false positives in strumming detection by transitioning from accelerometer-based to gyroscope-based analysis.

## 🔮 Future Scope

1. Up-Strum and Down-Strum Detection (`GY > 0` vs `GY < 0`)
2. Velocity Sensitive Playing (Volume scales with rotation speed)
3. AI-Based Gesture Recognition for complex chords
4. Haptic Feedback for physical strum confirmation
5. Multi-Instrument Support (Bass, Ukulele, Drums)
6. Mobile Application for custom chord mapping
7. Real-Time Audio Processing onboard the ESP32

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
