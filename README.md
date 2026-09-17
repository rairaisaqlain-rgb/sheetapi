<div align="center">

# SheetAPI

**Spreadsheet → read-only JSON**

[Live site](https://rairaisaqlain-rgb.github.io/sheetapi/) · [Download](https://pannki.com/sheetapi.zip)

</div>

## Problem

Ops teams keep living in Sheets and still export CSV every time a site needs data. SheetAPI is a small Windows build plus a documented `GET /v1/rows` shape.

## Founders limits

- 1 project
- 180 days free (17 Sep 2026 → 16 Mar 2027)
- Request cap stays on — this is not an open proxy
- Day 181: $12 / month Builder

## Download

https://pannki.com/sheetapi.zip → `sheetapi.exe`

## Response shape

```json
{ "ok": true, "rows": [{ "id": 1, "status": "demo" }] }
```

## Not in v1

Write-back to the sheet, unlimited public endpoints, Excel macros as an execution engine.

Site: https://rairaisaqlain-rgb.github.io/sheetapi/
