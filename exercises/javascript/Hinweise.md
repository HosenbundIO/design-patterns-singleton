## Anforderungen:

1. Füge die benötigte Logik im Konstruktor der Klasse `Logger` ein, um das Singleton-Pattern zu implementieren. Checke
   dabei, ob eine Instanz im Umlauf ist.
2. getInstance: Diese Methode sollte die einzige Möglichkeit sein, eine Instanz der Klasse zu erhalten. Sie
   erstellt die Instanz nur, wenn sie noch nicht existiert.
3. Stelle sicher, dass die Klasse UserSettings nur eine einzige Instanz hat.
   Verwende eine statische Variable, um die Instanz zu speichern.
   Im Konstruktor prüfe, ob bereits eine Instanz existiert. Wenn ja, gib diese zurück, anstatt eine neue zu erstellen.
   Implementiere eine get-Methode, die den Wert einer Einstellung basierend auf einem Schlüssel zurückgibt.
   Implementiere eine set-Methode, die den Wert einer Einstellung basierend auf einem Schlüssel setzt.