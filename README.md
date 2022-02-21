# IPL Dashboard

Dieses Projekt nutzt einen großen Datensatz (csv) mit allen Spieldaten der Indian Premier League ab 2008 von Kaggle um diese Daten aufbereitet als Rest API bereitzustellen. Eine Webseite nutzt diese API um die Daten - wie z.B. die Spiele einzelner Jahre oder spezifischer Teams - graphisch aufbereitet darzustellen. 

Technologien:
-	Spring Boot um eine Rest Api zu bauen
-	Spring Batch um die Daten einzulesen und in passende Java Entities umzuwandeln
-	Spring Data JPA und HSQL Datenbank um die mit Batch erstellten Daten zu speichern
-	Typescript mit React um die Webseite darzustellen
-	AWS Elastic Beanstalk um das fertige Spring Boot Projekt (mit Typescript Datein integriert) zu deployen
