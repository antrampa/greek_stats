-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: greek_stats
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `source`
--

DROP TABLE IF EXISTS `source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `source` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(120) DEFAULT NULL,
  `url_xlsx` varchar(255) NOT NULL,
  `active` binary(1) DEFAULT '1',
  `sort` int DEFAULT NULL,
  `descr` varchar(120) DEFAULT NULL,
  `text` text,
  `comment` text,
  `timestamp` datetime NOT NULL,
  `csv_file_name` varchar(200) NOT NULL,
  `csv_data` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `source`
--

LOCK TABLES `source` WRITE;
/*!40000 ALTER TABLE `source` DISABLE KEYS */;
INSERT INTO `source` VALUES (1,'https://opendata.bankofgreece.gr/el/dataset/28','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Non_residents_expenditure_per_journey_el_2023-03-31.xlsx',_binary '1',1,'Δαπάνη ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Τριμηνιαία)',NULL,'','2023-04-23 00:00:00','BoG_Non_residents_expenditure_per_journey_el_2023-03-31.csv',NULL),(2,'https://opendata.bankofgreece.gr/el/dataset/41','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Yearly_Non_residents_expenditure_per_journey_el_2023-03-31.xlsx',_binary '1',2,'Δαπάνη ανά ταξίδι μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)',NULL,NULL,'2023-04-23 00:00:00','BoG_Yearly_Non_residents_expenditure_per_journey_el_2023-03-31.csv',NULL),(3,'https://opendata.bankofgreece.gr/el/dataset/44','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Yearly_Residents_expenditure_per_journey_el_2023-03-31.xlsx',_binary '1',3,'Δαπάνη ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)',NULL,NULL,'2023-04-23 00:00:00','BoG_Yearly_Residents_expenditure_per_journey_el_2023-03-31.csv',NULL),(4,'https://opendata.bankofgreece.gr/el/dataset/43','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Yearly_Non_residents_expenditure_per_overnight_stay_el_2023-03-31.xlsx',_binary '1',4,'Δαπάνη ανά διανυκτέρευση μη κατοίκων στην Ελλάδα κατά χώρα προέλευσης (Ετήσια)',NULL,NULL,'2023-04-23 00:00:00','BoG_Yearly_Non_residents_expenditure_per_overnight_stay_el_2023-03-31.csv',NULL),(5,'https://opendata.bankofgreece.gr/el/dataset/45','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Yearly_Residents_expenditure_per_overnight_stay_el_2023-03-31.xlsx',_binary '1',5,'Δαπάνη ανά διανυκτέρευση κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)',NULL,NULL,'2023-04-23 00:00:00','BoG_Yearly_Residents_expenditure_per_overnight_stay_el_2023-03-31.csv',NULL),(6,'https://opendata.bankofgreece.gr/el/dataset/46','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Yearly_Residents_average-duration_of_stay_el_2023-03-31.xlsx',_binary '1',6,'Μέση διάρκεια παραμονής ανά ταξίδι κατοίκων στο εξωτερικό κατά χώρα προορισμού (Ετήσια)','ΠΕΡΙΓΡΑΦΗ: Ταξιδιωτικές υπηρεσίες\n\nΣΗΜΕΙΩΣΕΙΣ:\n\nΣημείωση 1: Σε αριθμό διανυκτερεύσεων\n\nΣημείωση 2: Στον υπολογισμό των ταξιδιωτικών δεικτών για τους κατοίκους, δεν λαμβάνεται υπόψη η κίνηση και οι διανυκτερεύσεις των μόνιμων κατοίκων Ελλάδος (κάτοικοι) που ταξίδεψαν στην Αλβανία με λόγο ταξιδιού: α) Επίσκεψη σε συγγενείς / φίλους β) Επαγγελματικοί λόγοι γ) Άλλοι λόγοι, και των οποίων οι ταξιδιωτικές πληρωμές αποτελούν μονομερείς μεταβιβάσεις και δεν καταγράφονται στο ισοζύγιο ταξιδιωτικών υπηρεσιών.\n\nΣημείωση 3: Από τον Ιανουάριο 2010 η κατηγορία ‘οργανωμένα ταξίδια’ περιλαμβάνει οιονδήποτε συνδυασμό των ταξιδιωτικών υπηρεσιών για εισιτήρια, διαμονή και λοιπές υπηρεσίες, που αγοράζονται μέσω ταξιδιωτικών πρακτορείων. Περιλαμβάνει επίσης και τα πακέτα κρουαζιέρας.\n\nΜΕΘΟΔΟΛΟΓΙΚΕΣ ΕΠΕΞΗΓΗΣΕΙΣ: Ανάλυση της μεθοδολογίας της «Έρευνας Συνόρων» παρουσιάζεται αναλυτικά στο Οικονομικό Δελτίο: Τεύχος 27, Ιούλιος 2006, σελ. 71.\n\nΟΡΟΙ ΧΡΗΣΗΣ: Τα δεδομένα παρέχονται για στατιστική και ερευνητική χρήση και υπόκεινται σε αναθεωρήσεις, βάσει των προβλεπόμενων διαδικασιών, για βελτίωση της ποιότητάς τους. Η πιο πρόσφατη διαθέσιμη έκδοση του κάθε συνόλου δεδομένων αντικαθιστά όλες τις προγενέστερες. Ο χρήστης έχει την ευθύνη να λαμβάνει γνώση των επικαιροποιούμενων μεθοδολογικών επεξηγήσεων (metadata) και της συμπληρωματικής πληροφόρησης που συνοδεύουν το κάθε σύνολο δεδομένων, προτού προχωρήσει στη χρήση του.​​​',NULL,'2023-04-23 00:00:00','BoG_Yearly_Residents_average-duration_of_stay_el_2023-03-31.csv',NULL),(7,'https://opendata.bankofgreece.gr/el/dataset/53','https://www.bankofgreece.gr/OpenDataSetFilesALL/PAYMENTSSTATISTICS/BoG_PayStatsAnnual_EL_2022-09-30.xlsx',_binary '1',30,'Στατιστικές πληρωμών','ΣΗΜΕΙΩΣΕΙΣ: \nΟ όγκος καρτών και τερματικών αφορά στο τέλος της περιόδου αναφοράς.\nΟ όγκος και η αξία των συναλλαγών αφορούν στο σύνολο για την περίοδο αναφοράς.\n\nΟΡΟΙ ΧΡΗΣΗΣ: Τα δεδομένα παρέχονται για στατιστική και ερευνητική χρήση και υπόκεινται σε αναθεωρήσεις, βάσει των προβλεπόμενων διαδικασιών, για βελτίωση της ποιότητάς τους. Η πιο πρόσφατη διαθέσιμη έκδοση του κάθε συνόλου δεδομένων αντικαθιστά όλες τις προγενέστερες. Ο χρήστης έχει την ευθύνη να λαμβάνει γνώση των επικαιροποιούμενων μεθοδολογικών επεξηγήσεων (metadata) και της συμπληρωματικής πληροφόρησης που συνοδεύουν το κάθε σύνολο δεδομένων, προτού προχωρήσει στη χρήση του.\n',NULL,'2023-04-23 00:00:00','BoG_PayStatsAnnual_EL_2022-09-30.csv',NULL),(8,'https://opendata.bankofgreece.gr/el/dataset/52','https://www.bankofgreece.gr/OpenDataSetFilesALL/GOLD/BoG_Bulletin_Gold_el_2023-04.xlsx',_binary '1',31,'Δελτίο τιμών χρυσού και χρυσών νομισμάτων',NULL,NULL,'2023-04-23 00:00:00','BoG_Bulletin_Gold_el_2023-04.csv',NULL),(9,'https://opendata.bankofgreece.gr/el/dataset/37','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_EXD_EL_2023-03-31.xlsx',_binary '1',32,'Ακαθάριστο Εξωτερικό Χρέος',NULL,NULL,'2023-04-23 00:00:00','BoG_EXD_EL_2023-03-31.csv',NULL),(10,'https://opendata.bankofgreece.gr/el/dataset/38','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Number_of_outbound_travellers_el_2023-03-31.xlsx',_binary '1',8,'Εξερχόμενη ταξιδιωτική κίνηση κατοίκων στο εξωτερικό ανά χώρα προορισμού',NULL,NULL,'2023-04-23 00:00:00','BoG_Number_of_outbound_travellers_el_2023-03-31.csv',NULL),(11,'https://opendata.bankofgreece.gr/el/dataset/35','https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Travel_by_region_el_2023-03-31.xlsx',_binary '1',7,'Ταξιδιωτικά στοιχεία ανά περιφέρεια για τις κυριότερες χώρες προέλευσης ταξιδιωτών',NULL,NULL,'2023-04-23 00:00:00','BoG_Travel_by_region_el_2023-03-31.csv',NULL);
/*!40000 ALTER TABLE `source` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 15:38:25
