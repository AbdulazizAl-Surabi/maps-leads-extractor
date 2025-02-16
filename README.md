
# Maps Leads Extractor

Ein Next.js-Projekt zur Extraktion von Unternehmens-Leads basierend auf einer Karten-Suche (Google Maps API) und Speicherung in einer Supabase-Datenbank.

## 🚀 Features

- 🌍 **Google Maps API** zur Unternehmenssuche im Umkreis eines definierten Standortes
- 📊 **Leads-Verwaltung** mit Speicherung in Supabase
- 📥 **Datenbank-Anbindung** über Supabase
- 🔄 **Dynamische Extraktion** mit zufälliger Anzahl an Unternehmen (7-15)
- ⏳ **Lade-Animation** während der Extraktion
- 💾 **Speicherung der Daten** in Supabase mit direkter Anzeige in einer Lead-Liste
- 📂 **Download-Funktion** zum Speichern von Leads als Datei

---

## 🛠️ Installation

### 1️⃣ Repository klonen
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/maps-leads-extractor.git
cd maps-leads-extractor
```

### 2️⃣ Abhängigkeiten installieren
```sh
npm install
```

### 3️⃣ API-Keys & Konfiguration

Für den Betrieb der Anwendung werden **API-Keys** benötigt. Der **Supabase API Key** wird in `.env.local` hinterlegt, während der **Google Maps API Key** direkt im Code eingefügt wird.

#### 🔹 **Schritt 1: `.env.local` erstellen**
Erstelle eine `.env.local`-Datei im Hauptverzeichnis des Projekts:

```sh
touch .env.local
```

Füge dann folgende Zeilen hinzu:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Ersetze `YOUR_SUPABASE_URL` und `YOUR_SUPABASE_ANON_KEY` mit deinen tatsächlichen Supabase-Zugangsdaten.

#### 🔹 **Schritt 2: Google Maps API Key einfügen**
Der Google Maps API Key muss direkt in die Datei **`components/MapServiceComponent.tsx`** eingefügt werden.

Öffne die Datei **`components/MapServiceComponent.tsx`** und ersetze `YOUR_GOOGLE_MAPS_API_KEY` durch deinen tatsächlichen API Key:

```tsx
const script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places";
```

ℹ️ **Google Maps API Key erstellen:**  
Folge dieser Anleitung, um einen Google Maps API Key zu erhalten:  
🔗 [Google Maps API Key Anleitung (PDF)]([https://www.winorder.com/download/WinOrder-Anleitung-GoogleMaps-ApiKey.pdf](https://www.winorder.com/download/WinOrder-Anleitung-GoogleMaps-ApiKey.pdf))

### 4️⃣ Lokalen Entwicklungsserver starten
```sh
npm run dev
```

Die Anwendung ist dann unter `http://localhost:3000` erreichbar.

---

## 📌 Nutzung

1️⃣ **Standort & Radius auswählen** – Klicke auf die Karte oder ändere den Radius-Slider.  
2️⃣ **"Unternehmen suchen"** – Unternehmen in der Umgebung werden extrahiert und angezeigt.  
3️⃣ **Speicherung in Supabase** – Leads können in die Datenbank gespeichert und später abgerufen werden.  
4️⃣ **Download-Funktion** – Leads können als Datei heruntergeladen werden.

---

## 🛠️ Technologien

- **Next.js** – Frontend-Framework für React
- **React** – UI-Komponenten & Hooks
- **Google Maps API** – Standort- & Unternehmenssuche
- **Supabase** – Datenbank & Authentifizierung
- **Tailwind CSS** – Styling

---


## 🛠️ Fehlerbehebung

- **Fehlermeldung "Hydration failed"** → Stelle sicher, dass der Google Maps API Key korrekt in **`components/MapServiceComponent.tsx`** gesetzt ist.  
- **Fehlermeldung "Row-Level Security" in Supabase** → Aktiviere **Row-Level Security** in deiner Supabase-Datenbank für die `leads`-Tabelle.

---

## 👨‍💻 Autor

📧 E-Mail: wi22110@lehre.dhbw-stuttgart.de  

---

