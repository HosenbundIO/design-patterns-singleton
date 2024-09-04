# Singleton Cheat Sheet

## Was ist das Singleton Design Pattern?

Beim Singleton-Design-Pattern wird sichergestellt, dass eine Klasse nur eine einzige Instanz hat und dass diese Instanz
von überall im Code global zugänglich ist. Wenn versucht wird, eine weitere Instanz dieser Klasse zu erstellen, wird
stattdessen auf die bereits bestehende Instanz verwiesen. Das bedeutet, dass eine zentrale Verwaltung von Ressourcen und
Zuständen durch ein Objekt ermöglicht wird.

<img src="images/singleton_veranschaulichung.png">

### Pseudo Code Example

```java
class Singleton:

    private static instance: Singleton


    private constructor():
        // Initiate

    public static method getInstance() -> Singleton:
        if instance is null:

            instance = new Singleton()
        return instance
```

## Analogien

1. Das Gesetzbuch eines Landes, welches alle Gesetze und Vorschriften enthält. Wie beim Singleton Design Pattern
   erfolgen
   alle rechtlichen Referenzen auf das eine Buch.
2. In einem Raum gibt es nur einen Lichtschalter, somit erfolgen alle Steuerungen für das Licht über diesen einen
   Schalter.
3. Der einzige Zugang zu einem Bürgerbüro.

## Nachteile und Probleme von Singleton

### 1. Problem: Fast unmöglich zu testen

Durch die globale Natur eines Singletons gestalten sich unabhängig und isolierte Tests zu gestalten als äußerst
schwierig.
Mögliche Probleme beim Testen könnten sein:

1. Der Zustand des Singleton kann zwischen Tests bestehen bleiben.
2. Singleton Instanz kann schwierig gemockt werden.
3. Fehlende Flexibilität bei Unit-Tests, da der Singleton eine feste Instanz ist.

### 2. Problem: Förderung einer globalen Instanz

Globale Verfügbarkeit fördert Abhängigkeiten, was die Modularität verringert und gerade das Refactoring erschwert.
Insbesondere können Abhängigkeiten schwer verfolgt und kontrolliert werden.

### 3. Problem: Verstößt gegen das Single-Responsibility Prinzip

Das Single-Responsibility Prinzip gehört zu den SOLID Design Prinzipien und sagt aus, dass eine Klasse sich nur um eine
Art von Funktionalität kümmern sollte. Ein Singleton hat mindestens 2 Aufgaben. Seine Kernaufgabe (Business-Logic),
sowie die Steuerung der Lebensdauer.

### 4. Problem: Multithreaded Programs

## Vorteile und Anwendungsgebiete von Singleton

### 1. Effizientes Ressourcenmanagement

Eine einzige Instanz einer Klasse spart Ressourcen. Dies wird insbesondere bei großen und ressourcenintensiven Klassen
mit großen Datenmengen sichtbar.

### 2. Globale Zugänglichkeit

Die Zugänglichkeit wird erleichtert durch die globale Natur eines Singletons. So bietet ein Singleton eine einfache
Schnittstelle für zentrale Aufgaben.

### 3. Konsistenz und Einmaligkeit

Das Singleton-Muster garantiert, dass es nur eine Instanz der Klasse gibt. Dies stellt sicher, dass die Zustände und
Daten der Instanz konsistent bleiben, da alle Teile des Programms dieselbe Instanz verwenden.

### Anwendungsgebiete

1. Datenbankverbindungen
2. Logging
3. Cache-Systeme





