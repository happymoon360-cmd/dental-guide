# Script Generation Test Results

## English Script Example

**Parameters:**
- Procedure: Root Canal (신경치료)
- Payment: Cash Full Payment (현금 일시불)
- Urgency: Urgent (급함)
- Scenario: First Visit (첫 방문)
- Budget: Minimize Cost (최대한 낮추고 싶음)
- Tone: Polite (정중형)
- Channel: In-Person (방문)
- Language: English

### Expected Output - Option A:
```
Hello. Root Canal I'd like to request a consultation.
I'm requesting an in-person consultation.
I'm in significant pain and need the earliest possible appointment.
This is my first visit. Please guide me through steps and what to bring.
I plan to pay by Cash Full Payment.
I need to minimize costs. Are there options to lower the price?
If possible, I'd like to politely ask about adjustments or alternatives.
Could you share the expected cost range and needed exams/treatments?
If same-day or cash payment is possible, are discounts available?
If there are lower-cost equivalents or phased options, please advise.
```

### Expected Output - Option B:
```
Hello. Root Canal I have some questions.
I'm requesting an in-person consultation.
This is my first visit. Please guide me through steps and what to bring.
Payment by Cash Full Payment is fine.
I need to minimize costs. Are there options to lower the price?
If possible, I'd like to politely ask about adjustments or alternatives.
Please share pre-treatment exams and expected costs, and I'll prepare.
Are student clinics/membership plans available to reduce costs?
If possible, could you advise phased treatment or alternatives?
```

---

## Spanish Script Example

**Parameters:**
- Procedure: Exam/Cleaning (검진/스케일링)
- Payment: Card Same-Day Payment (당일 카드 일시불)
- Urgency: Regular (일반)
- Scenario: Follow-up Visit (재방문)
- Budget: Accept Reasonable Cost (합리적이면 수용)
- Tone: Direct (직접형)
- Channel: Phone (전화)
- Language: Spanish (es)

### Expected Output - Option A:
```
Hola. Examen/Limpieza Quisiera solicitar una consulta.
Me comunico por teléfono.
Quiero una explicación clara del plan de tratamiento y los costos.
Los síntomas continúan desde la última visita. Quiero una consulta de seguimiento.
Planeo pagar por Pago de Tarjeta el Mismo Día.
Puedo proceder dentro de un rango de costo razonable.
Quiero confirmar costos y alternativas directamente.
¿Puede compartir el rango de costos y los exámenes/tratamientos necesarios?
Si el pago al contado o el mismo día es posible, ¿hay descuentos?
Si hay opciones equivalentes de menor costo o tratamiento por fases, infórmeme.
```

### Expected Output - Option B:
```
Hola. Examen/Limpieza Tengo algunas preguntas.
Me comunico por teléfono.
Los síntomas continúan desde la última visita. Quiero una consulta de seguimiento.
El pago por Pago de Tarjeta el Mismo Día está bien.
Puedo proceder dentro de un rango de costo razonable.
Quiero confirmar costos y alternativas directamente.
Comparta exámenes previos y costos estimados, y me prepararé.
¿Hay clínicas de estudiantes/planes de membresía para reducir costos?
Si es posible, ¿puede indicar tratamiento por fases o alternativas?
```

---

## Korean Script Example (Still Supported)

**Parameters:**
- Procedure: Root Canal (신경치료)
- Payment: Cash (현금 일시불)
- Urgency: Urgent (급함)
- Language: Korean (ko)

### Expected Output - Option A:
```
안녕하세요. 신경치료 관련 상담을 요청드립니다.
방문 상담을 요청드립니다.
현재 통증이 심해 가능한 빠른 진료가 필요합니다.
첫 방문이라 절차와 준비물을 안내받고 싶습니다.
지불 방식은 현금 일시불로 생각하고 있습니다.
예산을 최대한 절감하고 싶습니다. 비용을 낮출 수 있는 옵션이 있는지 알고 싶습니다.
가능하다면 비용 조정이나 대안을 조심스럽게 여쭙고 싶습니다.
예상 비용 범위와 필요한 검사/시술 항목을 알려주실 수 있을까요?
현금 또는 당일 결제가 가능하면 할인 적용이 가능한지도 확인 부탁드립니다.
동일한 효과의 더 저렴한 대안이나 단계별 치료 옵션이 있으면 안내 부탁드립니다.
```

---

## How to Test

1. Open the browser: http://localhost:3000
2. Navigate to **Script Builder** (/script-builder)
3. Set language to **English** or **Español**
4. Fill in the form and click **Generate Scripts**
5. Copy the generated scripts

All three languages (Korean, English, Spanish) are now fully supported with proper translations!
