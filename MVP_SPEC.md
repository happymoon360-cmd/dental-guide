# Guerilla Dental Guide MVP Specification

## Goals
- Provide practical tools to help uninsured and low-income individuals reduce dental costs and increase treatment accessibility
- Unite negotiation scripts, dental school matching, and alternative care guides in one lightweight app

## Target Users
- Adults without dental insurance or with limited coverage
- At-risk for Medicaid benefit reductions
- People unaware of dental school treatment options

## User Scenarios
- User enters treatment type and payment method to immediately receive negotiation scripts
- User checks nearby dental school information based on ZIP code
- User checks lifestyle management guides for dentures, partial dentures, and pain/inflammation responses

## Feature Scope (MVP)
1. Negotiation Script Generator
- Input: Treatment type, payment method, urgency, budget sensitivity
- Output: 2-3 speaking templates and core checklists

2. Dental School Matching
- Input: ZIP code
- Output: Dental school list sorted by proximity, contact information, appointment guide
- Data: Public dental school list (initially curated manually)

3. Alternative Care Guide
- Topic-based cards: Partial denture care, temporary tooth care, pain/inflammation response
- Lifestyle management focus, not medical advice

## Non-Functional Requirements
- Mobile-first UI (web MVP)
- Minimize offline dependency (can check basic info without network)
- Fast loading (static file-based)

## Data Structure (MVP)
- DentalSchool
  - name
  - city
  - state
  - zip
  - phone
  - website
  - notes

## Scope Exclusions
- Real-time case matching
- Insurance claim support
- Medical diagnosis/treatment recommendations

## Success Metrics (Initial)
- Negotiation script generation completion rate
- Dental school click/call rate
- Guide page dwell time

