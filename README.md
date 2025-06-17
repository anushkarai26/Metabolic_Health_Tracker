# 60-Day Metabolic Health Tracker 

A smart, automated dashboard project built in Google Sheets that helps track and analyze key metabolic health metrics over a 60-day period, using inputs from Google Forms, real-time calculations, and Apps Script automation.

---

## Features
- Form-based input system for 13+ health metrics

- Smart dashboard with storytelling visuals

- Auto-generated insights using formulas

- Automated monthly email report to users as PDF


## Project Summary

| **Task**                          | **Tool**              | **Automated?** |
|----------------------------------|-----------------------|----------------|
| Users input daily metrics        | Google Form           | ✅              |
| Responses sent to sheet          | Google Forms          | ✅              |
| Copy responses to main sheet     | Apps Script           | ✅              |
| Derived metrics calculated       | Google Sheets Formulas| ✅              |
| Dashboard auto-updated           | Charts + Logic        | ✅              |
| Monthly health report emailed    | Apps Script           | ✅              |


---

## 🧾 Data Collected (Tracked from Google Form)

| Metric               | Description                      |
|----------------------|----------------------------------|
| Weight (kg)          | Daily body weight                |
| BMI                  | Calculated or entered manually   |
| Calories             | Daily intake                     |
| Blood Sugar (mg/dL)  | Fasting or post-meal             |
| Water Intake (L)     | Total litres                     |
| Sleep (hrs)          | Total night sleep                |
| Steps                | Steps tracked                    |
| Mood (1-5)           | Self-rated                       |
| Stress (1-10)        | Self-rated                       |
| Sugary Drinks (ml)   | e.g., soda, juice                |
| Active Minutes       | Logged active minutes            |

---

## Derived Metrics (Derived in Google Sheets)

| Metric             | Formula Basis                     |
|--------------------|------------------------------------|
| **Calorie Balance**| Based on avg calories & activity   |
| **Hydration Status**| Water intake threshold             |
| **Sleep Quality**   | Below or above 6 hours             |
| **Sugar Cravings**  | Based on sugary drink intake       |
| **Metabolic Score** | Weighted average of mood, sleep, steps (0–100) |

---
## 📝 Google Form (Data Entry)
[Click here to view the form](https://docs.google.com/forms/d/e/1FAIpQLScIOqhAs3jbpn2z4RBrV7ns5EaVCOxvJhE6IlRsQ_gpl38jjg/viewform?usp=header)

## 📈 Dashboard Preview

![Metabolic_Health_Tracker - Dashboard-1](https://github.com/user-attachments/assets/9b6c72b3-7fe6-4104-9c50-ec9b08697fb0)

### A. North Star Metrics & Key Health Dimensions

#### 🔹 North Star Metrics
- **Metabolic Score (avg):** `65.1` – Overall lifestyle health indicator (0–100 scale)
- **Sleep Hours (avg):** `7 hrs` – Core recovery metric
- **Daily Steps (avg):** `9,028` – Physical activity level
- **Low Hydration Days:** `25` – Days with <2L water intake
- **Poor Sleep Days:** `25` – Days with <6 hrs of sleep

#### 🔹 Key Dimensions Tracked
- `Date`
- `Mood (1–5)`
- `Stress Level (1–10)`
- `Sugary Drinks Intake (ml)`
- `Calories & Active Minutes`
- `Sleep, Water, Weight, BMI`
- **Derived Metrics**: 
  - Calorie Balance  
  - Hydration Status  
  - Sleep Quality  
  - Sugar Cravings  
  - Metabolic Score

---

### B. Summary of Key Health Insights

#### - Physical Activity & Calorie Trends
- While calorie intake fluctuated, **average steps remained above 9,000/day**, supporting positive calorie balance trends.
- Days with **>60 Active Minutes** aligned with **higher Mood ratings and lower Stress**, confirming the mind-body link.

#### - Sleep & Recovery Patterns
- Despite a healthy average sleep of `7 hrs`, **25 days were marked "Poor" (<6 hrs)**.
- **Better Mood** and **lower sugar cravings** consistently aligned with good sleep nights.
- **Thursday to Saturday** showed the best sleep-mood combo — an ideal period for recovery and habit reset.

#### - Hydration & Cravings
- Hydration was below 2L on **42% of days**, potentially affecting energy, mood, and cravings.
- Spikes in **sugary drink intake (>300ml)** correlated with **higher blood sugar** and **lower mood**.
- Days with **Mood ≤ 2** also featured poor sleep and low hydration, highlighting a triad associated with burnout.

#### - Mood & Stress Patterns
- **Mood Distribution** skewed positively, with most entries rated `4–5` – a sign of good baseline mental health.
- Mood dipped midweek with Stress peaking at `8–10`, often following sleep-deficient days.
- **Lowest mood scores** appeared on Mondays — indicating a behavioural dip at week-start.

---

### C. Recommendations & Next Steps

#### 1. Lifestyle & Wellness Improvements
-  **Hydration Nudges**: Add smart reminders or habit trackers to reduce "Low Hydration" days.
-  **Reinforce Sleep Routine**: Target 6.5–8 hrs consistently; capitalize on weekend recovery trends.
-  **Reduce Sugary Drink Intake**: Substitute with flavoured water or herbal tea on stressful days.

#### 2. Activity Optimization
-  Aim for **30+ Active Minutes daily** to boost and maintain Metabolic Score >70.
-  Schedule higher effort days (e.g., intense walks or yoga) between **Thursday–Saturday**.

#### 3. Behavioral Timing
-  Introduce **Monday micro-routines** (gratitude journaling, quick walks) to offset early-week low mood.
-  Use **Friday prep rituals** for a strong weekend reset (sleep, meal prep, hydration goals).


## 📝 Googlesheets

[Click here to view the sheet](https://docs.google.com/spreadsheets/d/1HYZV0eIk7BwNP2OmopyQUBgkzoQfwkYhc-2YEmofqVM/edit?usp=sharing)

---

##  Step-by-Step Setup

### ✅ 1. Create Google Form

- Open [Google Forms](https://forms.google.com)
- Add fields matching your health metrics

- Go to **Responses > Link to Sheets** to sync with a Google Sheet.

---

### ✅ 2. Structure the Google Sheet

Your linked Sheet should have:

- `Form Responses 1` tab – auto-generated by the form
- `Health_Data` tab – manually created for metric processing
- `Dashboard` tab – for visuals and storytelling charts

---

### ✅ 3. Copy Form Submissions to Health_Data Tab

#### 🔸 Apps Script to Transfer Data

1. Go to `Extensions > Apps Script`
2. Name the project `form_data_sync.gs`
3. Add this code:
![image](https://github.com/user-attachments/assets/5ba64e68-677c-4477-80e0-6a238c96d585)
4. Save and click `Triggers > Add Trigger`
   - Function: `onFormSubmit`
   - Event: From Spreadsheets > On Form Submit
     ![project2](https://github.com/user-attachments/assets/2726e1f3-5cf1-4301-b0be-cbce16d11254)



---
### ✅ 4. Add Derived Metric Columns (in Health_Data tab)
After the base metrics, create the following columns using formulas:

🔹 Calorie Balance `=Calories - (Active Minutes * 5)`

🔹 Hydration Status `=IF(Water_Liters < 2, "Low", "Good")`

🔹 Sleep Quality `=IF(Sleep_Hours < 6, "Poor", "Good")`

🔹 Sugar Cravings `=IF(Sugary_Drinks_ml > 250, "High", "Low")`

🔹 Metabolic Score
`=ROUND(AVERAGE(
  (Mood - 1) / (5 - 1),
  (Sleep_Hours - 5) / (9 - 5),
  (Steps - 2000) / (10000 - 2000)
) * 100, 1)`

--- 

### ✅ 5. Build Dashboard Tab (In-Sheet Visuals)
Use Google Sheets charts and scorecards with conditional formatting:

- Scorecards using `=AVERAGE()` or `=COUNTIF()`:
   - Average Sleep Hours
  
   - Average Steps
  
   - Average Metabolic Score
  
   - Poor Sleep Days
  
   - Low Hydration Days

- Charts:
    - Line Chart: Weight & BMI over time
    
    - Bar Chart: Calories vs Active Minutes
    
    - Pie Chart: Mood Distribution
    
    - Combo Chart: Sleep Hours vs Stress Level
    
    - Scatter Plot: Sugary Drinks vs Blood Sugar
    
    - Line Chart: Metabolic Score Trend

- Smart Insights Section

  Example:
    `=IF(AVERAGE(Sleep_Hours) < 6, "⚠️ Poor sleep may impact recovery", "✅ Sleep hygiene is good")`

  ---

### ✅ 6. Email Dashboard Monthly as PDF

Automate monthly report delivery using **Google Apps Script**.

#### 🔸 Step A: Create Script File

1. Go to your Google Sheet:
   `Extensions > Apps Script`
2. Create a new file and name it: `dashboard_automation.gs`
3. Paste the following code:

```javascript
function emailDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Dashboard");
  const url = ss.getUrl().replace(/edit$/, '');

  const pdfUrl = url + `export?format=pdf&exportFormat=pdf&gid=${sheet.getSheetId()}&portrait=true&fitw=true&top_margin=0.5&bottom_margin=0.5&left_margin=0.5&right_margin=0.5&sheetnames=false&printtitle=false&pagenumbers=false&gridlines=false`;

  const options = {
    headers: {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    }
  };

  const response = UrlFetchApp.fetch(pdfUrl, options);
  const blob = response.getBlob().setName("Metabolic_Health_Report.pdf");

  const email = "user@example.com"; // Optional: pull from form or sheet
  const subject = "Your Monthly Metabolic Health Report";
  const body = "Attached is your personalized report. Stay healthy!";

  MailApp.sendEmail(email, subject, body, { attachments: [blob] });
}
```

---

#### 🔸 Step B: Schedule Monthly Email Automation

1. In the Apps Script editor, go to `Triggers > + Add Trigger`
2. Set the trigger settings:

   * **Function**: `emailDashboard`
   * **Event Type**: `Time-driven`
   * **Type of time-based trigger**: `Month timer`
   * **Day of month**: `First day`
   * **Time of day**: Your preference (e.g., 8 AM)

![project4](https://github.com/user-attachments/assets/b5d5f9f2-9f85-4336-81e9-3cbe7844622d)


This will automatically email a PDF snapshot of your `Dashboard` tab to the user once a month.

---
Here’s your updated section in **README.md format**, properly rewritten for GitHub and including the **Python EDA file** in the folder structure:

---

## 📁 Folder Structure

```
📂 60-Day-Metabolic-Tracker
│
├── 📄 README.md                   # Full setup instructions & project overview
├── 📄 form_data_sync.gs           # Script to copy Form responses to Health_Data tab
├── 📄 dashboard_automation.gs     # Script to email monthly dashboard PDF
├── 📄 eda_metabolic_health.py     # Optional Python EDA for deeper analysis
└── 📊 Google Sheets (linked from Google Form)
```

---

##  Author

**Anushka Rai**
Built with 💚 using data, automation, and a vision for preventive health.

---

##  Want to Contribute?

Feel free to fork this repo and suggest enhancements such as:

* ✅ Adding **data validation rules** to prevent incorrect form entries
* 📊 Displaying **BMI categories** like Underweight, Normal, Overweight, Obese
* 🤖 Integrating **GPT-powered insights** using OpenAI + Apps Script
* 📧 Implementing **multi-user filtering** for sending personalized dashboards

Pull requests are welcome! 😊

---

## Tech Stack

| Component         | Tool Used                   |
|------------------|-----------------------------|
| Form Collection  | Google Forms                |
| Data Storage     | Google Sheets               |
| Logic & Sync     | Google Apps Script          |
| Visualization    | Google Sheets Charts        | 
| Automation       | Time-Driven Email Triggers  |
| EDA              | Python                      |

---

## Setup Guide

### 🔹 1. Copy the Template

📎 [Click here to open the Google Sheet Template](PUT-YOUR-SHEET-LINK-HERE)

- Fill metrics via Google Form
- Form responses auto-sync to `Health_Data`
- Dashboard pulls live data

### 🔹 2. Add Script Triggers

> From the sheet: `Extensions → Apps Script`

- Paste `form_auto_sync.gs` to sync data
- Paste `email_dashboard.gs` for PDF delivery
- Add `Time-driven trigger` to send PDF monthly

---

## Automatic Monthly Reports

📧 Sends Dashboard as PDF every 1st of the month via email using `emailDashboard()` function.

---

## Resources

- [Google Apps Script Docs](https://developers.google.com/apps-script)
- [CDC BRFSS Data](https://www.cdc.gov/brfss/index.html)
- [WHO Health Metrics](https://www.who.int/data/gho)
