# Lexisg-backend-intern-test

This is the backend assignment submission for the Lexi internship.  
It simulates a legal assistant backend API using Node.js and Express.

---

## 🧠 Objective

To simulate an API that responds to legal questions with an AI-generated answer and one or more citations.  
The frontend can POST a query and receive structured legal info, just like Lexi does.

---

## 📋 API Endpoint

### POST /api/query

*Request Body:*

```json
{
  "question": "In a motor accident claim where the deceased was self-employed and aged 54–55 years..."
}

Response:

{
  "answer": "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
  "citations": [
    {
      "text": "as the age of the deceased at the time of accident was held to be about 54–55 years...",
      "source": "Dani_Devi_v_Pritam_Singh.pdf",
      "link": "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/..."
    }
  ]
}

How to Run Locally:
npm install
node index.js

http://localhost:5000/