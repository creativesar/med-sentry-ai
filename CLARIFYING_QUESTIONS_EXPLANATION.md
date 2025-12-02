# Clarifying Questions Feature Implementation

## Overview
The MedSentry AI system now includes a feature that displays clarifying questions along with medication suggestions and medical reports. This enhancement helps users provide more accurate information for better medical analysis.

## Implementation Details

### Backend (AI Prompt Enhancement)
The Gemini AI prompt has been updated to include clearer guidance on when and how to ask clarifying questions:

1. When user input is ambiguous or incomplete, the AI generates targeted questions to gather necessary information
2. Questions are designed to help refine the medical analysis and provide more accurate recommendations
3. The AI is instructed to prioritize the most critical information gaps first

### Frontend (UI Enhancement)
The TriageCard component has been enhanced to display clarifying questions in a visually distinct section:

1. Added a new "Need More Information?" section that appears when clarifying questions are provided
2. Used blue color scheme to differentiate questions from other content
3. Included clear instructions for users to answer the questions for better assessment accuracy
4. Added the HelpCircle icon for visual clarity

### Data Flow
1. User submits symptoms or medical information
2. AI analyzes the input and generates:
   - Medical assessment
   - Medication suggestions (when appropriate)
   - Clarifying questions (when needed)
3. All information is displayed together in the TriageCard component
4. Users can respond to clarifying questions to refine the analysis

## Benefits
- Improves accuracy of medical assessments by gathering complete information
- Provides a more interactive and guided user experience
- Helps users understand what information is most important for their case
- Maintains all existing safety and compliance measures

## Example Usage
When a user submits "I have a headache", the system might ask:
- "How long have you had the headache?"
- "On a scale of 1-10, how severe is the pain?"
- "Do you have any other symptoms like nausea or sensitivity to light?"

This additional information helps the AI provide a more accurate assessment and appropriate medication suggestions.