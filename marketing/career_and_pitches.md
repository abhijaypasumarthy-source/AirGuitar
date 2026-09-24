# Pitch & Career Materials

This document contains professionally written copy for resumes, LinkedIn, hackathons, SIH, and recruiter summaries.

---

## 1. Resume Project Entry (ATS-Friendly)

**Air Guitar – Wearable Gesture-Controlled Musical Instrument** | *ESP32, C++, MPU6050, BLE, I2C*
*   Architected a dual-microcontroller wearable system using ESP32 and ESP32-C3 to simulate a stringless guitar, processing human motion into real-time musical outputs.
*   Engineered a custom strum-detection algorithm utilizing a 6-axis MPU6050 IMU, filtering accelerometer noise by isolating gyroscope Y-axis rotational data to eliminate false positives.
*   Designed a magnetic sensor matrix using neodymium magnets and reed switches for low-latency chord selection, displaying real-time UI data on an I2C OLED display.
*   Integrated Bluetooth Low Energy (BLE) communication to synchronize chord selection and strumming events seamlessly with an external audio synthesizer.

---

## 2. LinkedIn Project Description

**🚀 Excited to share my latest embedded systems project: Air Guitar! 🎸**

Ever wanted to play the guitar without carrying one around? I engineered a wearable system that turns natural hand gestures into real music. 

The system relies on a dual-glove architecture:
✋ **Left Glove (Chord Selection):** Powered by an ESP32-C3, it uses a matrix of magnetic reed switches to detect finger positions and select chords instantly.
👋 **Right Glove (Strumming):** Powered by an ESP32, it utilizes a 6-axis MPU6050 IMU. By analyzing raw gyroscope data and isolating wrist rotation (filtering out linear accelerometer noise), it achieves highly accurate strum detection.

**Tech Stack:** ESP32, C++, I2C, BLE, Sensor Fusion, Wearable Computing.

This project was an incredible deep dive into hardware debugging, signal processing, and human-computer interaction (HCI). Check out the repository below! 👇

#EmbeddedSystems #ESP32 #InternetOfThings #IoT #WearableTech #Engineering #Cplusplus

---

## 3. GitHub Project Description (About Section)

A wearable gesture-controlled musical instrument powered by ESP32. Utilizes magnetic reed switches for chord selection and MPU6050 gyroscope data for precise strum detection via Bluetooth Low Energy (BLE).

---

## 4. Recruiter-Friendly Project Summary

"Air Guitar is a wearable IoT device I built from scratch that lets users play music using hand gestures. I programmed two ESP32 microcontrollers in C++ to communicate via Bluetooth. The biggest engineering challenge I solved was eliminating false triggers during strumming; I achieved this by dropping unreliable accelerometer data and writing a custom algorithm that analyzes pure rotational velocity from a gyroscope. It demonstrates my skills in hardware-software integration, I2C/BLE protocols, and algorithm optimization."

---

## 5. Hackathon Pitch (Elevator Pitch)

"Music shouldn't be limited by physical instruments. Meet Air Guitar: a wearable system that turns your hand movements into a live concert. Using an ESP32-C3 and magnetic sensors on the left hand, you select chords. Using a 6-axis IMU on the right hand, you strum. We process raw gyroscope data to detect precise wrist rotations, send the data via BLE, and generate sound in real-time. It’s cheap, it’s wearable, and it’s the future of musical HCI."

---

## 6. Smart India Hackathon (SIH) Submission Description

**Title:** Air Guitar: Accessible Wearable Musical Interface using Sensor Fusion
**Problem Addressed:** Traditional musical instruments require significant physical space, high costs, and steep learning curves, limiting accessibility. 
**Proposed Solution:** A low-cost, wearable dual-microcontroller system. The left module utilizes magnetic proximity sensing for chord selection, while the right module leverages real-time gyroscope data processing to detect strumming gestures. 
**Innovation:** Transitioning from error-prone accelerometer data to threshold-based rotational gyroscope data ensures zero false positives in gesture recognition. The system communicates via ultra-low-latency BLE, paving the way for accessible music education and AR/VR integration.

---

## 7. Presentation Scripts

### 2-Minute Script (Demo Day)
**Intro (0:00-0:30):** "Hi, I'm [Name], and this is Air Guitar. We've built a stringless, wearable guitar that you play with natural gestures."
**How it Works (0:30-1:15):** "It uses two gloves. The left glove has an ESP32-C3 and magnetic reed switches. When my thumb touches a finger, a chord is locked in. You can see it updating on this OLED. The right glove has a 6-axis IMU. Instead of looking at linear movement, we process raw gyroscope data to detect the exact rotational snap of a wrist strum."
**Conclusion (1:15-2:00):** "They sync via Bluetooth to a synthesizer. [Demonstrate playing]. We solved major sensor noise issues to make this feel incredibly natural. Air guitar is no longer just imagination—it’s real technology."

### 5-Minute Script (Technical Deep Dive)
*(Expand on the 2-minute script by adding the Development Journey)*
"...When we built the strumming glove, we first tried a push-button. It felt robotic. Then, we used the accelerometer's X/Y/Z axes. The problem? Every time I moved my arm or walked, gravity and linear momentum triggered a false strum.
Our breakthrough came from analyzing guitar biomechanics. Strumming isn't linear; it's rotational. We rewrote our algorithm to ignore the accelerometer entirely and isolate the Y-axis of the gyroscope. By setting a specific threshold for angular velocity, we achieved 100% accuracy in strum detection. [Show Architecture Diagram]..."
