const ISLANDS = [
  {
    slug: 'santorini',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Santorini', el: 'Σαντορίνη' },
    tagline: { en: 'Volcanic caldera views', el: 'Θέα στην ηφαιστειογενή καλντέρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santorini%2C_Oia_32.jpg?width=1400',
    credit: 'LBM1948, CC BY-SA 4.0',
    desc: {
      en: 'Santorini is built along the rim of a collapsed volcanic caldera, with whitewashed villages perched hundreds of metres above the sea. Oia is famous for its sunsets, while Fira offers lively cafés and cable-car views over the crater.',
      el: 'Η Σαντορίνη είναι χτισμένη στα χείλη μιας βυθισμένης ηφαιστειακής καλντέρας, με ασβεστωμένα χωριά χτισμένα εκατοντάδες μέτρα πάνω από τη θάλασσα. Η Οία φημίζεται για τα ηλιοβασιλέματά της, ενώ τα Φηρά προσφέρουν ζωντανά καφέ και θέα στον κρατήρα από το τελεφερίκ.'
    },
    more: {
      en: 'Most visitors arrive by ferry into the old port below Fira, then take the cable car or a mule path up the cliff. Away from the caldera rim, inland villages such as Pyrgos and Megalochori feel far quieter, and Santorini\'s volcanic soil produces distinctive wines, especially the dry white Assyrtiko.',
      el: 'Οι περισσότεροι επισκέπτες φτάνουν με πλοίο στο παλιό λιμάνι κάτω από τα Φηρά και ανεβαίνουν με το τελεφερίκ ή με μονοπάτι με τα μουλάρια. Μακριά από τα χείλη της καλντέρας, χωριά της ενδοχώρας όπως ο Πύργος και το Μεγαλοχώρι είναι πολύ πιο ήσυχα, ενώ το ηφαιστειογενές έδαφος του νησιού δίνει ξεχωριστά κρασιά, ιδίως τον ξηρό λευκό Ασύρτικο.'
    },
    best: { en: 'April–October, quietest in May, June & September', el: 'Απρίλιος–Οκτώβριος, πιο ήσυχα τον Μάιο, Ιούνιο & Σεπτέμβριο' },
    highlights: {
      en: ['Sunset in Oia', 'Caldera-view villages', 'Volcanic black-sand beaches', 'Assyrtiko wine tasting'],
      el: ['Ηλιοβασίλεμα στην Οία', 'Χωριά με θέα στην καλντέρα', 'Ηφαιστειογενείς μαύρες παραλίες', 'Γευσιγνωσία Ασύρτικου']
    }
  },
  {
    slug: 'mykonos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Mykonos', el: 'Μύκονος' },
    tagline: { en: 'Cosmopolitan island life', el: 'Κοσμοπολίτικο νησί' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Little_Venice%2C_Mykonos.jpg?width=1400',
    credit: 'Bgag, CC BY-SA 3.0',
    desc: {
      en: 'Mykonos pairs whitewashed alleyways and iconic windmills with some of the liveliest nightlife in Greece. Little Venice, with its balconies over the water, is the classic postcard view of the island.',
      el: 'Η Μύκονος συνδυάζει ασβεστωμένα σοκάκια και εμβληματικούς ανεμόμυλους με μια από τις πιο ζωντανές νυχτερινές ζωές της Ελλάδας. Η Μικρή Βενετία, με τα μπαλκόνια πάνω από το νερό, είναι η κλασική εικόνα-καρτ ποστάλ του νησιού.'
    },
    more: {
      en: 'Beyond Mykonos Town (Chora), the island\'s south coast holds its best-known beaches, from family-friendly Ornos to the party scene at Paradise and Super Paradise. The nearby islet of Delos, a UNESCO World Heritage archaeological site, is an easy day trip by boat.',
      el: 'Πέρα από τη Χώρα, η νότια ακτή του νησιού κρύβει τις πιο γνωστές παραλίες του, από τον οικογενειακό Ορνό μέχρι τη σκηνή πάρτι στο Paradise και το Super Paradise. Η κοντινή Δήλος, αρχαιολογικός χώρος παγκόσμιας κληρονομιάς της UNESCO, είναι μια εύκολη ημερήσια εκδρομή με βάρκα.'
    },
    best: { en: 'May–September, peak nightlife July–August', el: 'Μάιος–Σεπτέμβριος, αιχμή νυχτερινής ζωής Ιούλιος–Αύγουστος' },
    highlights: {
      en: ['Little Venice', 'Windmills of Kato Mili', 'Beach clubs at Paradise & Super Paradise', 'Day trip to Delos'],
      el: ['Μικρή Βενετία', 'Ανεμόμυλοι Κάτω Μύλοι', 'Beach clubs στο Paradise & Super Paradise', 'Ημερήσια εκδρομή στη Δήλο']
    }
  },
  {
    slug: 'naxos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Naxos', el: 'Νάξος' },
    tagline: { en: 'The largest Cycladic island', el: 'Το μεγαλύτερο νησί των Κυκλάδων' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/GR-naxos-chora-pano_%28cropped%29.jpg?width=1400',
    credit: 'Bgabel, CC BY-SA 3.0',
    desc: {
      en: 'Naxos combines sandy beaches with a mountainous, traditional interior of stone villages. The marble Portara gate, standing alone at the harbour entrance, is the island\'s best-known landmark.',
      el: 'Η Νάξος συνδυάζει αμμουδερές παραλίες με μια ορεινή, παραδοσιακή ενδοχώρα με πέτρινα χωριά. Η μαρμάρινη Πορτάρα, που στέκεται μόνη της στην είσοδο του λιμανιού, είναι το πιο γνωστό ορόσημο του νησιού.'
    },
    more: {
      en: 'Inland, the road climbs through olive and citrus groves to villages like Halki and Apeiranthos, where marble streets and Venetian towers recall the island\'s medieval past. Naxos is also known across Greece for its potatoes, cheese and Kitron liqueur.',
      el: 'Στην ενδοχώρα, ο δρόμος ανεβαίνει μέσα από ελαιώνες και εσπεριδοειδή προς χωριά όπως το Χαλκί και ο Απείρανθος, όπου μαρμάρινοι δρόμοι και ενετικοί πύργοι θυμίζουν το μεσαιωνικό παρελθόν του νησιού. Η Νάξος είναι επίσης γνωστή σε όλη την Ελλάδα για τις πατάτες, το τυρί και το λικέρ Κίτρο της.'
    },
    best: { en: 'June–September for beaches, spring for hiking in the villages', el: 'Ιούνιος–Σεπτέμβριος για παραλίες, άνοιξη για πεζοπορία στα χωριά' },
    highlights: {
      en: ['Portara gate', 'Mountain villages of Apeiranthos & Halki', 'Plaka & Agios Prokopios beaches', 'Local Kitron liqueur'],
      el: ['Πορτάρα', 'Ορεινά χωριά Απείρανθος & Χαλκί', 'Παραλίες Πλάκα & Άγιος Προκόπιος', 'Τοπικό λικέρ Κίτρο']
    }
  },
  {
    slug: 'paros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Paros', el: 'Πάρος' },
    tagline: { en: 'Traditional Cycladic villages', el: 'Παραδοσιακά κυκλαδίτικα χωριά' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro_in_Parikia_on_Paros%2C_075822.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Paros is known for the Kastro quarter in Parikia, built partly from stones of an ancient temple, and for well-preserved villages like Lefkes and Naoussa, a former fishing harbour turned relaxed evening hub.',
      el: 'Η Πάρος είναι γνωστή για τη συνοικία του Κάστρου στην Παροικιά, χτισμένη εν μέρει με πέτρες από αρχαίο ναό, καθώς και για καλοδιατηρημένα χωριά όπως η Λεύκες και η Νάουσα, ένα παλιό ψαράδικο λιμανάκι που σήμερα ζωντανεύει τα βράδια.'
    },
    more: {
      en: 'Paros sits at the centre of the Cyclades ferry network, making it a convenient base for island hopping. Its beaches range from the windsurfing spot of Golden Beach to quieter coves near Aliki, and Parian marble was prized by ancient sculptors for its translucent quality.',
      el: 'Η Πάρος βρίσκεται στο κέντρο του δικτύου ακτοπλοϊκών γραμμών των Κυκλάδων, γεγονός που την κάνει βολική βάση για island hopping. Οι παραλίες της κυμαίνονται από το σημείο για windsurfing στη Χρυσή Ακτή μέχρι πιο ήσυχους κολπίσκους κοντά στην Αλυκή, ενώ το παριανό μάρμαρο ήταν περιζήτητο από τους αρχαίους γλύπτες για τη διαφάνειά του.'
    },
    best: { en: 'June–September, ferries connect easily to nearby islands', el: 'Ιούνιος–Σεπτέμβριος, εύκολη σύνδεση με πλοία προς κοντινά νησιά' },
    highlights: {
      en: ['Kastro quarter, Parikia', 'Naoussa harbour', 'Lefkes mountain village', 'Golden Beach windsurfing'],
      el: ['Κάστρο, Παροικιά', 'Λιμάνι Νάουσας', 'Ορεινό χωριό Λεύκες', 'Windsurfing στη Χρυσή Ακτή']
    }
  },
  {
    slug: 'milos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Milos', el: 'Μήλος' },
    tagline: { en: 'Moon-like volcanic coastline', el: 'Σεληνιακή ηφαιστειογενής ακτογραμμή' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko_Beach_on_the_island_of_Milos%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Milos is shaped by its volcanic past, nowhere more strikingly than at Sarakiniko, a beach of smooth white rock that looks almost lunar. The island counts more than 70 beaches around its coastline.',
      el: 'Η Μήλος είναι διαμορφωμένη από το ηφαιστειογενές παρελθόν της, πουθενά πιο εντυπωσιακά απ\' ό,τι στο Σαρακήνικο, μια παραλία από λείο λευκό βράχο που μοιάζει σχεδόν σεληνιακή. Το νησί μετρά πάνω από 70 παραλίες γύρω από την ακτογραμμή του.'
    },
    more: {
      en: 'The island\'s capital, Plaka, sits above the water on a hillside crowned by a Venetian castle, and the nearby archaeological museum tells the story of the Venus de Milo statue, found on the island in 1820. Fishing villages like Klima have small boat garages built directly into the rock, painted in bright colours.',
      el: 'Η πρωτεύουσα του νησιού, η Πλάκα, βρίσκεται πάνω από το νερό σε μια πλαγιά που στέφεται από ενετικό κάστρο, ενώ το κοντινό αρχαιολογικό μουσείο αφηγείται την ιστορία του αγάλματος της Αφροδίτης της Μήλου, που βρέθηκε στο νησί το 1820. Ψαροχώρια όπως το Κλήμα έχουν μικρά υπόστεγα για βάρκες σκαλισμένα απευθείας στον βράχο, βαμμένα σε έντονα χρώματα.'
    },
    best: { en: 'June–September for swimming, boat tours run all summer', el: 'Ιούνιος–Σεπτέμβριος για μπάνιο, βαρκάδες όλο το καλοκαίρι' },
    highlights: {
      en: ['Sarakiniko beach', 'Kleftiko sea caves by boat', 'Plaka village & castle view', 'Klima fishing village'],
      el: ['Παραλία Σαρακήνικο', 'Σπηλιές Κλέφτικο με βάρκα', 'Χωριό Πλάκα & θέα από το κάστρο', 'Ψαροχώρι Κλήμα']
    }
  },
  {
    slug: 'ios',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Ios', el: 'Ίος' },
    tagline: { en: 'Beaches and a lively Chora', el: 'Παραλίες και ζωντανή Χώρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ios_island%2C_Cyclades%2C_Greece_hill_2007.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY-SA 2.0',
    desc: {
      en: 'Ios is best known for its beaches and its hillside Chora, a maze of whitewashed lanes that fills with bars and small restaurants after sunset. The port of Ios lies below, connected to Chora by a short uphill walk or a local bus.',
      el: 'Η Ίος είναι πιο γνωστή για τις παραλίες της και τη Χώρα της στην πλαγιά, έναν λαβύρινθο ασβεστωμένων δρομάκων που γεμίζει με μπαρ και μικρά εστιατόρια μετά το ηλιοβασίλεμα. Το λιμάνι της Ίου βρίσκεται πιο κάτω, με σύντομη ανηφορική διαδρομή ή τοπικό λεωφορείο μέχρι τη Χώρα.'
    },
    more: {
      en: 'Long popular with younger travellers for its nightlife, Ios has quieted down in recent years while keeping a strong beach-holiday identity, with Mylopotas among the most popular stretches of sand for swimming and water sports.',
      el: 'Δημοφιλής εδώ και χρόνια στους νεότερους ταξιδιώτες για τη νυχτερινή ζωή της, η Ίος έχει ηρεμήσει τα τελευταία χρόνια διατηρώντας παράλληλα έντονη ταυτότητα διακοπών με παραλία, με τον Μυλοπόταμο να ξεχωρίζει ως μία από τις πιο δημοφιλείς αμμουδιές για μπάνιο και θαλάσσια σπορ.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora nightlife', 'Mylopotas beach', 'Kastro ruins above Chora', 'Theodoti & Manganari beaches'],
      el: ['Νυχτερινή ζωή στη Χώρα', 'Παραλία Μυλοπόταμος', 'Ερείπια Κάστρου πάνω από τη Χώρα', 'Παραλίες Θεοδότη & Μαγγανάρι']
    }
  },
  {
    slug: 'sifnos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Sifnos', el: 'Σίφνος' },
    tagline: { en: 'Ceramics and Cycladic cooking', el: 'Κεραμική και κυκλαδίτικη κουζίνα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro%2C_Sifnos.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Sifnos has a long pottery tradition and a reputation as one of the best places in Greece to eat, with small tavernas serving slow-cooked dishes in clay pots. The fortified village of Kastro, the island\'s medieval capital, sits on a cliff above the sea.',
      el: 'Η Σίφνος έχει μακρά παράδοση στην κεραμική και φήμη ως ένα από τα καλύτερα μέρη στην Ελλάδα για φαγητό, με μικρές ταβέρνες που σερβίρουν φαγητά σε πήλινα σκεύη μαγειρεμένα σιγά-σιγά. Το οχυρωμένο χωριό Κάστρο, η μεσαιωνική πρωτεύουσα του νησιού, βρίσκεται πάνω σε έναν γκρεμό πάνω από τη θάλασσα.'
    },
    more: {
      en: 'A network of old walking paths connects Sifnos\' villages and its many small monasteries, making it a popular island for hikers as well as beach-goers. Apollonia, the modern capital, is built across three hills and stays lively well into the evening.',
      el: 'Ένα δίκτυο παλιών μονοπατιών συνδέει τα χωριά της Σίφνου και τα πολλά μικρά μοναστήρια της, καθιστώντας το ένα δημοφιλές νησί τόσο για πεζοπόρους όσο και για λάτρεις της παραλίας. Η Απολλωνία, η σημερινή πρωτεύουσα, είναι χτισμένη σε τρεις λόφους και παραμένει ζωντανή μέχρι αργά το βράδυ.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Kastro village', 'Local pottery workshops', 'Chrissopigi monastery', 'Slow-cooked clay-pot cuisine'],
      el: ['Χωριό Κάστρο', 'Τοπικά εργαστήρια κεραμικής', 'Μοναστήρι Χρυσοπηγής', 'Κουζίνα σε πήλινα σκεύη']
    }
  },
  {
    slug: 'serifos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Serifos', el: 'Σέριφος' },
    tagline: { en: 'Quiet island, dramatic Chora', el: 'Ήσυχο νησί με εντυπωσιακή Χώρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Serifos_-_View_from_Chora.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Serifos remains one of the quieter Cyclades, with a Chora that climbs dramatically up a rocky hill above the port of Livadi. The island once relied on iron-ore mining, and the old mining structures can still be seen along the coast.',
      el: 'Η Σέριφος παραμένει ένα από τα πιο ήσυχα νησιά των Κυκλάδων, με μια Χώρα που ανεβαίνει εντυπωσιακά πάνω σε έναν βραχώδη λόφο πάνω από το λιμάνι του Λιβαδιού. Το νησί βασιζόταν κάποτε στην εξόρυξη σιδηρομεταλλεύματος, και οι παλιές μεταλλευτικές εγκαταστάσεις είναι ακόμα ορατές κατά μήκος της ακτής.'
    },
    more: {
      en: 'With around 70 beaches and few large resorts, Serifos suits travellers looking for a slower pace, though the port area still has a good choice of small hotels and tavernas by the water.',
      el: 'Με περίπου 70 παραλίες και λίγα μεγάλα ξενοδοχειακά συγκροτήματα, η Σέριφος ταιριάζει σε ταξιδιώτες που αναζητούν πιο αργό ρυθμό, αν και η περιοχή του λιμανιού έχει ακόμα καλή επιλογή από μικρά ξενοδοχεία και ταβέρνες δίπλα στο νερό.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora hilltop village', 'Livadi port beaches', 'Old iron-mining sites', 'Panagia Skopiani church'],
      el: ['Χώρα στην κορυφή του λόφου', 'Παραλίες στο λιμάνι Λιβάδι', 'Παλιές θέσεις εξόρυξης σιδήρου', 'Εκκλησία Παναγία Σκοπιανή']
    }
  },
  {
    slug: 'folegandros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Folegandros', el: 'Φολέγανδρος' },
    tagline: { en: 'Clifftop Chora, few crowds', el: 'Χώρα πάνω σε γκρεμό, λίγος κόσμος' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Folegandros-8_banner.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Folegandros is a small, rugged island whose Chora is built directly on the edge of a 200-metre cliff. Its main square, ringed by churches and cafés, is one of the most atmospheric in the Cyclades.',
      el: 'Η Φολέγανδρος είναι ένα μικρό, βραχώδες νησί, με τη Χώρα του χτισμένη απευθείας στην άκρη ενός γκρεμού 200 μέτρων. Η κεντρική πλατεία της, περιτριγυρισμένη από εκκλησίες και καφέ, είναι από τις πιο ατμοσφαιρικές των Κυκλάδων.'
    },
    more: {
      en: 'Folegandros has stayed relatively undeveloped, with just three settlements — Chora, the port at Karavostasis, and Ano Meria — linked by a single road. Katergo, on the south coast, is a popular beach reachable only on foot or by boat.',
      el: 'Η Φολέγανδρος έχει παραμείνει σχετικά αναπτυγμένη ελάχιστα, με μόλις τρεις οικισμούς — τη Χώρα, το λιμάνι στον Καραβοστάση και την Άνω Μεριά — που συνδέονται με έναν μόνο δρόμο. Το Κάτεργο, στη νότια ακτή, είναι δημοφιλής παραλία προσβάσιμη μόνο με τα πόδια ή με βάρκα.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora\'s clifftop main square', 'Katergo beach', 'Ano Meria folklore museum', 'Church of Panagia above Chora'],
      el: ['Κεντρική πλατεία της Χώρας πάνω στον γκρεμό', 'Παραλία Κάτεργο', 'Λαογραφικό μουσείο Άνω Μεριάς', 'Εκκλησία Παναγίας πάνω από τη Χώρα']
    }
  },
  {
    slug: 'rhodes',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Rhodes', el: 'Ρόδος' },
    tagline: { en: 'Medieval old town', el: 'Μεσαιωνική παλιά πόλη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Street_of_Knights_%28Rhodes%29_03.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Rhodes\' Old Town is a UNESCO World Heritage Site, ringed by medieval walls. The Street of the Knights leads up to the Palace of the Grand Master, while the coastline offers everything from resort beaches to quiet coves.',
      el: 'Η Παλιά Πόλη της Ρόδου είναι μνημείο παγκόσμιας κληρονομιάς της UNESCO, περιτριγυρισμένη από μεσαιωνικά τείχη. Η Οδός των Ιπποτών οδηγεί στο Παλάτι του Μεγάλου Μαγίστρου, ενώ η ακτογραμμή προσφέρει από οργανωμένες παραλίες μέχρι ήσυχους κολπίσκους.'
    },
    more: {
      en: 'South of Rhodes Town, the clifftop village of Lindos combines a whitewashed hillside with an ancient acropolis overlooking the sea, and is one of the most photographed spots on the island. Inland villages like Archangelos keep a quieter, more traditional pace.',
      el: 'Νότια της πόλης της Ρόδου, το χωριό της Λίνδου πάνω σε γκρεμό συνδυάζει μια ασβεστωμένη πλαγιά με μια αρχαία ακρόπολη με θέα στη θάλασσα, και είναι από τα πιο φωτογραφημένα σημεία του νησιού. Χωριά της ενδοχώρας όπως ο Αρχάγγελος διατηρούν πιο ήσυχο, παραδοσιακό ρυθμό.'
    },
    best: { en: 'May–October, warm sea through late autumn', el: 'Μάιος–Οκτώβριος, ζεστή θάλασσα μέχρι αργά το φθινόπωρο' },
    highlights: {
      en: ['Street of the Knights', 'Palace of the Grand Master', 'Lindos acropolis & beach', 'Old Town city walls'],
      el: ['Οδός των Ιπποτών', 'Παλάτι του Μεγάλου Μαγίστρου', 'Ακρόπολη & παραλία Λίνδου', 'Τείχη της Παλιάς Πόλης']
    }
  },
  {
    slug: 'kos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Kos', el: 'Κως' },
    tagline: { en: 'Birthplace of Hippocrates', el: 'Γενέτειρα του Ιπποκράτη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Inside_Neratzia_Castle_Kos.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY 3.0',
    desc: {
      en: 'Kos is best known as the birthplace of Hippocrates, the father of medicine, and its main town preserves ruins from Greek, Roman and Ottoman periods side by side, including the Neratzia Castle guarding the harbour.',
      el: 'Η Κως είναι πιο γνωστή ως η γενέτειρα του Ιπποκράτη, του πατέρα της ιατρικής, και η κύρια πόλη της διατηρεί ερείπια από την ελληνική, ρωμαϊκή και οθωμανική περίοδο δίπλα-δίπλα, μαζί με το κάστρο της Νερατζιάς που φυλάει το λιμάνι.'
    },
    more: {
      en: 'The island is largely flat and easy to explore by bicycle, with long sandy beaches along its south coast and the ancient Asklepieion — a healing sanctuary linked to Hippocrates — a short trip from the main town.',
      el: 'Το νησί είναι σε μεγάλο βαθμό επίπεδο και εύκολο στην εξερεύνηση με ποδήλατο, με μακριές αμμώδεις παραλίες στη νότια ακτή του και το αρχαίο Ασκληπιείο — ένα θεραπευτικό ιερό συνδεδεμένο με τον Ιπποκράτη — σε μικρή απόσταση από την κύρια πόλη.'
    },
    best: { en: 'May–October', el: 'Μάιος–Οκτώβριος' },
    highlights: {
      en: ['Neratzia Castle', 'Ancient Asklepieion', 'Tree of Hippocrates', 'South-coast sandy beaches'],
      el: ['Κάστρο Νερατζιάς', 'Αρχαίο Ασκληπιείο', 'Πλάτανος του Ιπποκράτη', 'Αμμώδεις παραλίες νότιας ακτής']
    }
  },
  {
    slug: 'corfu',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Corfu', el: 'Κέρκυρα' },
    tagline: { en: 'Venetian-style old town', el: 'Παλιά πόλη σε βενετσιάνικο ρυθμό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Liston_-_Corfu_Old_Town.jpg?width=1400',
    credit: 'Amethyst forest, CC BY-SA 4.0',
    desc: {
      en: 'Corfu\'s old town blends Venetian, French and British influences, best seen along the arcaded Liston promenade. Beyond the town, the island is green and lush, with olive groves running down to quiet beaches.',
      el: 'Η παλιά πόλη της Κέρκυρας συνδυάζει βενετσιάνικες, γαλλικές και βρετανικές επιρροές, με πιο χαρακτηριστικό σημείο τη στοά του Λιστόν. Έξω από την πόλη, το νησί είναι καταπράσινο, με ελαιώνες που φτάνουν μέχρι ήσυχες παραλίες.'
    },
    more: {
      en: 'Corfu\'s Old Fortress and New Fortress, both built by the Venetians, once guarded the town from the sea. Inland, villages in the hills above Paleokastritsa keep a slower pace, and the island\'s cuisine reflects its Italian-influenced history, with dishes like pastitsada rarely found elsewhere in Greece.',
      el: 'Το Παλαιό και το Νέο Φρούριο της Κέρκυρας, και τα δύο χτισμένα από τους Ενετούς, φύλαγαν κάποτε την πόλη από τη θάλασσα. Στην ενδοχώρα, χωριά στους λόφους πάνω από την Παλαιοκαστρίτσα διατηρούν πιο αργό ρυθμό, ενώ η κουζίνα του νησιού αντανακλά την ιταλική επιρροή στην ιστορία του, με πιάτα όπως η παστιτσάδα που σπάνια συναντώνται αλλού στην Ελλάδα.'
    },
    best: { en: 'May–June & September for mild weather, July–August for swimming', el: 'Μάιος–Ιούνιος & Σεπτέμβριος για ήπιο καιρό, Ιούλιος–Αύγουστος για μπάνιο' },
    highlights: {
      en: ['Liston promenade', 'Old Fortress', 'Paleokastritsa coastline', 'Local pastitsada cuisine'],
      el: ['Στοά Λιστόν', 'Παλαιό Φρούριο', 'Ακτογραμμή Παλαιοκαστρίτσας', 'Τοπική κουζίνα με παστιτσάδα']
    }
  },
  {
    slug: 'zakynthos',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Zakynthos', el: 'Ζάκυνθος' },
    tagline: { en: 'Home of Navagio beach', el: 'Το νησί της παραλίας Ναυάγιο' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Navagio_Beach_and_Shipwreck_of_the_Panagiotis_at_%27Smugglers_Cove%27_Zakynthos.JPG?width=1400',
    credit: 'Badgernet, CC BY-SA 3.0',
    desc: {
      en: 'Zakynthos is best known for Navagio, a shipwreck beach enclosed by tall white cliffs and reachable only by boat. The island\'s coastline also holds blue sea caves and nesting grounds for loggerhead turtles.',
      el: 'Η Ζάκυνθος είναι πιο γνωστή για το Ναυάγιο, μια παραλία με το ναυάγιο πλοίου, κλεισμένη ανάμεσα σε ψηλούς λευκούς βράχους και προσβάσιμη μόνο με βάρκα. Η ακτογραμμή του νησιού κρύβει επίσης γαλάζιες σπηλιές και σημεία φωλιάσματος καρέτα-καρέτα.'
    },
    more: {
      en: 'Much of the south coast, including Laganas Bay, falls within a national marine park set up to protect nesting loggerhead turtles, so boat operators there follow specific rules to limit disturbance. Zakynthos Town, rebuilt after a major 1953 earthquake, still follows its original Venetian street plan.',
      el: 'Μεγάλο μέρος της νότιας ακτής, συμπεριλαμβανομένου του κόλπου του Λαγανά, βρίσκεται εντός θαλάσσιου εθνικού πάρκου που δημιουργήθηκε για την προστασία της φωλιάς της καρέτα-καρέτα, οπότε οι βαρκάρηδες εκεί ακολουθούν συγκεκριμένους κανόνες για να περιορίζουν την όχληση. Η πόλη της Ζακύνθου, που ξαναχτίστηκε μετά τον μεγάλο σεισμό του 1953, ακολουθεί ακόμα το αρχικό ενετικό της σχέδιο δρόμων.'
    },
    best: { en: 'May–September, calmest seas for the boat trip to Navagio in early summer', el: 'Μάιος–Σεπτέμβριος, πιο ήρεμη θάλασσα για τη βαρκάδα στο Ναυάγιο νωρίς το καλοκαίρι' },
    highlights: {
      en: ['Navagio (Shipwreck) beach', 'Blue Caves', 'Loggerhead turtle nesting beaches', "Zakynthos Town's Venetian layout"],
      el: ['Παραλία Ναυάγιο', 'Γαλάζιες Σπηλιές', 'Παραλίες φωλιάσματος καρέτα-καρέτα', 'Ενετικό σχέδιο της πόλης Ζακύνθου']
    }
  },
  {
    slug: 'kefalonia',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Kefalonia', el: 'Κεφαλονιά' },
    tagline: { en: 'The largest Ionian island', el: 'Το μεγαλύτερο νησί του Ιονίου' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Myrtos_Beach%2C_Kefalonia.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY 2.0',
    desc: {
      en: 'Kefalonia is the largest of the Ionian Islands, known for the sweeping white curve of Myrtos Beach, framed by steep limestone cliffs, and for mountain scenery that rises to Mount Ainos.',
      el: 'Η Κεφαλονιά είναι το μεγαλύτερο από τα Ιόνια νησιά, γνωστή για τη μεγάλη λευκή αμμουδιά της παραλίας Μύρτος, πλαισιωμένη από απότομους ασβεστολιθικούς βράχους, και για το ορεινό τοπίο που φτάνει μέχρι τον Αίνο.'
    },
    more: {
      en: 'Beyond its beaches, Kefalonia holds the Melissani cave-lake, where sunlight filters through a collapsed roof onto strikingly blue water, and the fishing village of Fiskardo, one of the few settlements spared by the 1953 earthquake and still lined with pastel-coloured Venetian houses.',
      el: 'Πέρα από τις παραλίες της, η Κεφαλονιά κρύβει τη λίμνη-σπηλιά Μελισσάνη, όπου το φως του ήλιου περνάει μέσα από μια βυθισμένη οροφή πάνω σε έντονα γαλάζιο νερό, καθώς και το ψαροχώρι Φισκάρδο, έναν από τους λίγους οικισμούς που γλίτωσαν από τον σεισμό του 1953 και εξακολουθεί να έχει παστέλ ενετικά σπίτια.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Myrtos Beach', 'Melissani cave-lake', 'Fiskardo village', 'Mount Ainos National Park'],
      el: ['Παραλία Μύρτος', 'Σπηλιά-λίμνη Μελισσάνη', 'Χωριό Φισκάρδο', 'Εθνικό Πάρκο Αίνου']
    }
  },
  {
    slug: 'lefkada',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Lefkada', el: 'Λευκάδα' },
    tagline: { en: 'Connected to the mainland by causeway', el: 'Συνδεδεμένη με την ήπειρο με πέρασμα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lefkada_banner_Porto_Katsiki.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC0 (public domain)',
    desc: {
      en: 'Lefkada is unusual among the Ionian Islands in being reachable by car over a short floating causeway from the mainland. It is best known for beaches like Porto Katsiki, where pale cliffs drop to turquoise water.',
      el: 'Η Λευκάδα ξεχωρίζει ανάμεσα στα Ιόνια νησιά καθώς είναι προσβάσιμη με αυτοκίνητο μέσω μιας μικρής πλωτής γέφυρας από την ήπειρο. Είναι πιο γνωστή για παραλίες όπως το Πόρτο Κατσίκι, όπου ανοιχτόχρωμοι βράχοι πέφτουν σε τιρκουάζ νερά.'
    },
    more: {
      en: 'The island\'s mountainous interior contrasts with its beach-lined west coast, and villages such as Karya keep alive a tradition of embroidery and lace-making. Lefkada Town, rebuilt with low, earthquake-resistant buildings after repeated tremors, sits on a lagoon facing the mainland.',
      el: 'Το ορεινό εσωτερικό του νησιού έρχεται σε αντίθεση με τη δυτική ακτή του, γεμάτη παραλίες, ενώ χωριά όπως η Καρυά διατηρούν παράδοση κεντήματος και δαντέλας. Η πόλη της Λευκάδας, ξαναχτισμένη με χαμηλά, αντισεισμικά κτίρια μετά από επαναλαμβανόμενους σεισμούς, βρίσκεται σε μια λιμνοθάλασσα απέναντι από την ήπειρο.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Porto Katsiki beach', 'Egremni beach', 'Karya village embroidery', 'Nydri as a base for boat trips'],
      el: ['Παραλία Πόρτο Κατσίκι', 'Παραλία Εγκρεμνοί', 'Κέντημα στο χωριό Καρυά', 'Νυδρί ως βάση για βαρκάδες']
    }
  },
  {
    slug: 'chania',
    group: 'crete',
    groupName: { en: 'Crete', el: 'Κρήτη' },
    name: { en: 'Chania', el: 'Χανιά' },
    tagline: { en: 'Venetian harbour town', el: 'Ενετική πόλη-λιμάνι' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_the_Old_Venetian_Harbour_in_Chania%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Chania, on the island of Crete, is built around a beautifully preserved Venetian harbour lined with cafés, a 16th-century lighthouse, and narrow old-town lanes. It is also the gateway to the Samaria Gorge.',
      el: 'Τα Χανιά, στο νησί της Κρήτης, είναι χτισμένα γύρω από ένα εξαιρετικά διατηρημένο ενετικό λιμάνι με καφέ, έναν φάρο του 16ου αιώνα, και στενά δρομάκια στην παλιά πόλη. Είναι επίσης η πύλη προς το φαράγγι της Σαμαριάς.'
    },
    more: {
      en: 'West of the town, the beaches of Balos and Elafonisi are known for shallow, pale-turquoise water and pink-tinged sand, though both require a longer drive or a boat trip. Chania\'s covered market and backstreet tavernas are a good introduction to Cretan cooking, built around olive oil, wild greens and local cheeses.',
      el: 'Δυτικά της πόλης, οι παραλίες Μπάλος και Ελαφονήσι είναι γνωστές για τα ρηχά, ανοιχτά τιρκουάζ νερά και την ελαφρώς ροζ άμμο τους, αν και και οι δύο απαιτούν μεγαλύτερη διαδρομή με αυτοκίνητο ή βάρκα. Η στεγασμένη αγορά των Χανίων και οι ταβέρνες στα πίσω δρομάκια είναι μια καλή εισαγωγή στην κρητική κουζίνα, βασισμένη σε ελαιόλαδο, άγρια χόρτα και τοπικά τυριά.'
    },
    best: { en: 'April–June & September–October for hiking, July–August for beaches', el: 'Απρίλιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος για πεζοπορία, Ιούλιος–Αύγουστος για παραλίες' },
    highlights: {
      en: ['Old Venetian Harbour', 'Samaria Gorge', 'Balos & Elafonisi beaches', 'Chania covered market'],
      el: ['Παλιό Ενετικό Λιμάνι', 'Φαράγγι Σαμαριάς', 'Παραλίες Μπάλος & Ελαφονήσι', 'Στεγασμένη αγορά Χανίων']
    }
  },
  {
    slug: 'heraklion',
    group: 'crete',
    groupName: { en: 'Crete', el: 'Κρήτη' },
    name: { en: 'Heraklion', el: 'Ηράκλειο' },
    tagline: { en: 'Gateway to ancient Knossos', el: 'Πύλη προς την αρχαία Κνωσό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/20090415_Hrakleio_Krhth_Limani_Koules_1.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: "Heraklion is Crete's largest city and its main gateway by air and sea. The Venetian-built Koules Fortress still guards the old harbour, and the city's archaeological museum holds one of the world's finest collections of Minoan art.",
      el: 'Το Ηράκλειο είναι η μεγαλύτερη πόλη της Κρήτης και η κύρια πύλη εισόδου αεροπορικώς και ακτοπλοϊκά. Το ενετικό κάστρο Κούλες φυλάει ακόμα το παλιό λιμάνι, ενώ το αρχαιολογικό μουσείο της πόλης φιλοξενεί μία από τις καλύτερες συλλογές μινωικής τέχνης στον κόσμο.'
    },
    more: {
      en: "Just outside the city, the Palace of Knossos is the best known of Crete's Minoan sites, with reconstructed sections giving a sense of what the Bronze Age complex once looked like. Heraklion also makes a convenient base for day trips to mountain villages and vineyards in the island's interior.",
      el: 'Λίγο έξω από την πόλη, το ανάκτορο της Κνωσού είναι ο πιο γνωστός μινωικός χώρος της Κρήτης, με αναστηλωμένα τμήματα που δίνουν μια εικόνα του πώς έμοιαζε κάποτε το συγκρότημα της Εποχής του Χαλκού. Το Ηράκλειο αποτελεί επίσης βολική βάση για ημερήσιες εκδρομές σε ορεινά χωριά και αμπελώνες της ενδοχώρας του νησιού.'
    },
    best: { en: 'April–October', el: 'Απρίλιος–Οκτώβριος' },
    highlights: {
      en: ['Palace of Knossos', 'Koules Fortress', 'Archaeological Museum of Heraklion', 'Venetian city walls'],
      el: ['Ανάκτορο της Κνωσού', 'Κάστρο Κούλες', 'Αρχαιολογικό Μουσείο Ηρακλείου', 'Ενετικά τείχη της πόλης']
    }
  },
  {
    slug: 'skiathos',
    group: 'sporades',
    groupName: { en: 'Sporades', el: 'Σποράδες' },
    name: { en: 'Skiathos', el: 'Σκιάθος' },
    tagline: { en: 'Pine forests and sandy beaches', el: 'Πευκόφυτα δάση και αμμώδεις παραλίες' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_Skiathos_Harbor%2C_Greece_%2851696603530%29.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Skiathos, the westernmost of the Sporades islands, is covered in pine forest that runs down almost to the waterline in places. Its main town wraps around a busy harbour lined with cafés, boats and a small islet-chapel connected by a causeway.',
      el: 'Η Σκιάθος, το δυτικότερο νησί των Σποράδων, είναι καλυμμένη με πευκοδάσος που σε ορισμένα σημεία φτάνει σχεδόν μέχρι την ακτή. Η κύρια πόλη της απλώνεται γύρω από ένα πολυσύχναστο λιμάνι με καφέ, βάρκες και ένα μικρό νησάκι-εκκλησία που συνδέεται με στενή γέφυρα.'
    },
    more: {
      en: 'Skiathos is known across Greece for the golden sands of Koukounaries and Lalaria beaches, the latter reachable only by boat and framed by white cliffs. Ferries connect the island easily to Skopelos and Alonissos for those exploring the wider Sporades.',
      el: 'Η Σκιάθος είναι γνωστή σε όλη την Ελλάδα για τη χρυσή άμμο των παραλιών Κουκουναριές και Λαλάρια, με την τελευταία να είναι προσβάσιμη μόνο με βάρκα και πλαισιωμένη από λευκούς βράχους. Τα πλοία συνδέουν εύκολα το νησί με τη Σκόπελο και την Αλόννησο για όσους θέλουν να εξερευνήσουν τις υπόλοιπες Σποράδες.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Koukounaries beach', 'Lalaria beach by boat', 'Bourtzi islet', 'Old Kastro fortress ruins'],
      el: ['Παραλία Κουκουναριές', 'Παραλία Λαλάρια με βάρκα', 'Νησάκι Μπούρτζι', 'Ερείπια παλιού Κάστρου']
    }
  },
  {
    slug: 'hydra',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Hydra', el: 'Ύδρα' },
    tagline: { en: 'Car-free island near Athens', el: 'Νησί χωρίς αυτοκίνητα κοντά στην Αθήνα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_of_Hydra_island%2C_Greece_%2843958918185%29.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Hydra bans all wheeled vehicles, including bicycles, so the only transport around its stone streets is on foot or by donkey and mule. Its crescent-shaped harbour is lined with 18th and 19th-century stone mansions built by wealthy shipowning families.',
      el: 'Η Ύδρα απαγορεύει κάθε τροχοφόρο, ακόμα και τα ποδήλατα, οπότε η μόνη μετακίνηση στα πέτρινα δρομάκια της γίνεται με τα πόδια ή με γαϊδούρι και μουλάρι. Το ημισεληνοειδές λιμάνι της είναι περιτριγυρισμένο από πέτρινα αρχοντικά του 18ου και 19ου αιώνα, χτισμένα από πλούσιες οικογένειες εφοπλιστών.'
    },
    more: {
      en: 'Only about an hour and a half from Piraeus by high-speed ferry, Hydra has long attracted artists and writers, including Leonard Cohen, who lived there in the 1960s. Small water taxis run from the harbour to swimming spots like Vlychos and Bisti along the coast.',
      el: 'Μόλις περίπου μιάμιση ώρα από τον Πειραιά με ταχύπλοο, η Ύδρα προσελκύει εδώ και καιρό καλλιτέχνες και συγγραφείς, ανάμεσά τους και τον Leonard Cohen, που έζησε εκεί τη δεκαετία του 1960. Μικρά υδροταξί ξεκινούν από το λιμάνι για σημεία κολύμβησης όπως ο Βλυχός και το Μπίστι κατά μήκος της ακτής.'
    },
    best: { en: 'April–October', el: 'Απρίλιος–Οκτώβριος' },
    highlights: {
      en: ['Car-free stone-mansion harbour', 'Vlychos & Bisti beaches by water taxi', 'Historical Archives Museum', 'Hilltop monasteries'],
      el: ['Λιμάνι χωρίς αυτοκίνητα με αρχοντικά', 'Παραλίες Βλυχός & Μπίστι με υδροταξί', 'Ιστορικό Αρχείο - Μουσείο', 'Μοναστήρια στους λόφους']
    }
  },
  {
    slug: 'samos',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Samos', el: 'Σάμος' },
    tagline: { en: 'Birthplace of Pythagoras', el: 'Γενέτειρα του Πυθαγόρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pythagorion.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Samos sits just off the coast of Turkey and is best known as the birthplace of the mathematician Pythagoras. The harbour town of Pythagoreio, a UNESCO World Heritage Site, preserves an ancient tunnel-aqueduct and the ruins of a temple to Hera.',
      el: 'Η Σάμος βρίσκεται σχεδόν ακριβώς απέναντι από τις ακτές της Τουρκίας και είναι πιο γνωστή ως η γενέτειρα του μαθηματικού Πυθαγόρα. Η πόλη-λιμάνι Πυθαγόρειο, μνημείο παγκόσμιας κληρονομιάς της UNESCO, διατηρεί ένα αρχαίο σηραγγοϋδραγωγείο και τα ερείπια ναού της Ήρας.'
    },
    more: {
      en: 'The island is mountainous and green, with vineyards producing sweet Muscat wine on terraced slopes above the sea. Samos is also a starting point for ferries to nearby Turkish coastal towns, making it useful for travellers combining Greece with a wider Aegean trip.',
      el: 'Το νησί είναι ορεινό και καταπράσινο, με αμπελώνες που παράγουν γλυκό μοσχάτο κρασί σε αναβαθμίδες πάνω από τη θάλασσα. Η Σάμος είναι επίσης σημείο εκκίνησης για πλοία προς κοντινές τουρκικές παράκτιες πόλεις, χρήσιμο για ταξιδιώτες που συνδυάζουν την Ελλάδα με ένα ευρύτερο ταξίδι στο Αιγαίο.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Pythagoreio harbour', 'Ancient Eupalinos tunnel-aqueduct', 'Heraion temple ruins', 'Muscat vineyards'],
      el: ['Λιμάνι Πυθαγορείου', 'Αρχαία σήραγγα-υδραγωγείο Ευπαλίνου', 'Ερείπια ναού Ηραίου', 'Αμπελώνες μοσχάτου']
    }
  },
  {
    slug: 'chios',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Chios', el: 'Χίος' },
    tagline: { en: 'Home of the mastic villages', el: 'Το νησί των μαστιχοχωριών' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_port_of_Mesta%2C_Chios%2C_Greece.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Chios is the only place in the world where mastic, an aromatic resin, is commercially grown, and its southern Mastic Villages, including the fortified settlement of Mesta, grew wealthy from the trade. Mesta\'s maze-like stone streets were built narrow deliberately to slow down pirate raids.',
      el: 'Η Χίος είναι το μοναδικό μέρος στον κόσμο όπου καλλιεργείται εμπορικά η μαστίχα, μια αρωματική ρητίνη, και τα νότια μαστιχοχώρια της, όπως ο οχυρωμένος οικισμός Μεστά, πλούτισαν από αυτό το εμπόριο. Τα δρομάκια-λαβύρινθος των Μεστών χτίστηκαν σκόπιμα στενά για να καθυστερούν τις πειρατικές επιδρομές.'
    },
    more: {
      en: 'Chios Town centres on a Genoese-era castle, and the island as a whole mixes mastic-growing villages in the south with pine forests and mountain monasteries further north, including the Byzantine monastery of Nea Moni, another UNESCO World Heritage Site.',
      el: 'Η πόλη της Χίου συγκεντρώνεται γύρω από ένα κάστρο της γενοβέζικης περιόδου, ενώ το νησί συνολικά συνδυάζει χωριά καλλιέργειας μαστίχας στον νότο με πευκοδάση και ορεινά μοναστήρια πιο βόρεια, συμπεριλαμβανομένης της βυζαντινής μονής Νέας Μονής, άλλου μνημείου παγκόσμιας κληρονομιάς της UNESCO.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Mesta fortified village', 'Mastic-growing villages', 'Nea Moni monastery', 'Chios Town castle'],
      el: ['Οχυρωμένο χωριό Μεστά', 'Μαστιχοχώρια', 'Μονή Νέας Μονής', 'Κάστρο της πόλης της Χίου']
    }
  },
  {
    slug: 'thassos',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Thassos', el: 'Θάσος' },
    tagline: { en: 'Pine-covered island near the mainland', el: 'Πευκόφυτο νησί κοντά στην ήπειρο' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro%2C_Thassos.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Thassos lies close to the northern mainland, reachable by a short ferry from Kavala, and is covered in pine and chestnut forest running down to white-pebble beaches. Marble quarried on the island since antiquity was once exported across the ancient Mediterranean.',
      el: 'Η Θάσος βρίσκεται κοντά στη βόρεια ηπειρωτική Ελλάδα, προσβάσιμη με σύντομο πλοίο από την Καβάλα, και είναι καλυμμένη με πευκοδάση και καστανιές που φτάνουν μέχρι παραλίες με λευκά βότσαλα. Το μάρμαρο που εξορυσσόταν στο νησί από την αρχαιότητα εξαγόταν κάποτε σε όλη τη Μεσόγειο.'
    },
    more: {
      en: 'Limenas, the main town, sits over the ancient city of Thasos, with an agora, theatre and acropolis still visible among the modern streets. The island\'s ring road makes it easy to circle by car or moped, stopping at fishing villages like Panagia and beaches such as Golden Beach along the way.',
      el: 'Ο Λιμένας, η κύρια πόλη, βρίσκεται πάνω στην αρχαία πόλη της Θάσου, με αγορά, θέατρο και ακρόπολη ακόμα ορατά ανάμεσα στους σύγχρονους δρόμους. Ο περιφερειακός δρόμος του νησιού κάνει εύκολη τη διαδρομή με αυτοκίνητο ή μηχανάκι, με στάσεις σε ψαροχώρια όπως η Παναγία και παραλίες όπως η Χρυσή Αμμουδιά.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Ancient Thasos ruins in Limenas', 'Golden Beach', 'Panagia village', 'Ring-road drive around the island'],
      el: ['Αρχαία Θάσος στον Λιμένα', 'Χρυσή Αμμουδιά', 'Χωριό Παναγία', 'Διαδρομή στον περιφερειακό δρόμο του νησιού']
    }
  },
  {
    slug: 'patmos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Patmos', el: 'Πάτμος' },
    tagline: { en: 'The island of the Apocalypse', el: 'Το νησί της Αποκάλυψης' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ph.Patmos_Monastery-01.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Patmos is a place of Christian pilgrimage, believed to be where Saint John wrote the Book of Revelation in a cave that can still be visited. The fortress-like Monastery of Saint John the Theologian crowns the hill above Chora, and both sites form a UNESCO World Heritage Site.',
      el: 'Η Πάτμος είναι τόπος χριστιανικού προσκυνήματος, καθώς πιστεύεται ότι εκεί ο Άγιος Ιωάννης έγραψε την Αποκάλυψη σε ένα σπήλαιο που επισκέπτεται ακόμα κόσμος. Η οχυρωμένη Μονή του Αγίου Ιωάννου του Θεολόγου στέφει τον λόφο πάνω από τη Χώρα, και οι δύο χώροι αποτελούν μαζί μνημείο παγκόσμιας κληρονομιάς της UNESCO.'
    },
    more: {
      en: 'Beyond its religious sites, Patmos has a quieter, more low-key holiday atmosphere than many Dodecanese islands, with small coves for swimming and a Chora of whitewashed captains\' houses built to be hard to see from the sea, a defence against pirate raids.',
      el: 'Πέρα από τους θρησκευτικούς χώρους της, η Πάτμος έχει πιο ήσυχη, χαμηλών τόνων ατμόσφαιρα διακοπών σε σχέση με πολλά νησιά των Δωδεκανήσων, με μικρούς κολπίσκους για μπάνιο και μια Χώρα από ασβεστωμένα καπετανόσπιτα χτισμένα ώστε να είναι δύσκολο να φαίνονται από τη θάλασσα, ως άμυνα απέναντι σε πειρατικές επιδρομές.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Monastery of Saint John the Theologian', 'Cave of the Apocalypse', 'Chora\'s captains\' houses', 'Quiet swimming coves'],
      el: ['Μονή Αγίου Ιωάννου του Θεολόγου', 'Σπήλαιο της Αποκάλυψης', 'Καπετανόσπιτα της Χώρας', 'Ήσυχοι κολπίσκοι για μπάνιο']
    }
  },
  {
    slug: 'karpathos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Karpathos', el: 'Κάρπαθος' },
    tagline: { en: 'Mountain villages and old traditions', el: 'Ορεινά χωριά και παλιές παραδόσεις' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/View_of_the_Finiki_village._Karpathos%2C_Greece.jpg?width=1400',
    credit: 'Ввласенко / Volodymyr Vlasenko, CC BY-SA 3.0',
    desc: {
      en: 'Karpathos, between Rhodes and Crete, is known for its rugged mountains and the isolated northern village of Olympos, where some older residents still wear traditional dress and speak a dialect with ancient roots.',
      el: 'Η Κάρπαθος, ανάμεσα στη Ρόδο και την Κρήτη, είναι γνωστή για τα απόκρημνα βουνά της και το απομονωμένο βόρειο χωριό Όλυμπος, όπου κάποιοι μεγαλύτεροι κάτοικοι ακόμα φορούν παραδοσιακές φορεσιές και μιλούν μια διάλεκτο με αρχαίες ρίζες.'
    },
    more: {
      en: 'For much of its history Olympos was reachable only on foot or by boat, which helped preserve its customs, while the south of the island has wide sandy beaches and stronger winds that attract windsurfers to spots like Afiartis.',
      el: 'Για μεγάλο μέρος της ιστορίας του, ο Όλυμπος ήταν προσβάσιμος μόνο με τα πόδια ή με βάρκα, κάτι που βοήθησε να διατηρηθούν τα έθιμά του, ενώ ο νότος του νησιού έχει φαρδιές αμμώδεις παραλίες και πιο δυνατούς ανέμους που προσελκύουν windsurfers σε σημεία όπως ο Αφιάρτης.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Olympos mountain village', 'Traditional dress & dialect', 'Windsurfing at Afiartis', 'Finiki fishing village'],
      el: ['Ορεινό χωριό Όλυμπος', 'Παραδοσιακή φορεσιά & διάλεκτος', 'Windsurfing στον Αφιάρτη', 'Ψαροχώρι Φοίνικας']
    }
  },
  {
    slug: 'skopelos',
    group: 'sporades',
    groupName: { en: 'Sporades', el: 'Σποράδες' },
    name: { en: 'Skopelos', el: 'Σκόπελος' },
    tagline: { en: 'The Mamma Mia! island', el: 'Το νησί του Mamma Mia!' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Skopelos_banner.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Skopelos is often described as the greenest of the Sporades, with dense pine forest covering much of the island. Its main town climbs a hillside above the harbour in tiers of whitewashed, tile-roofed houses, unusual for the Aegean.',
      el: 'Η Σκόπελος περιγράφεται συχνά ως το πιο πράσινο νησί των Σποράδων, με πυκνό πευκοδάσος να καλύπτει μεγάλο μέρος του νησιού. Η κύρια πόλη της ανεβαίνει σε μια πλαγιά πάνω από το λιμάνι σε σειρές από ασβεστωμένα σπίτια με κεραμοσκεπές, ασυνήθιστο για το Αιγαίο.'
    },
    more: {
      en: 'Parts of the 2008 film Mamma Mia! were shot on Skopelos, including a small chapel on a sea-cliff that has since become a popular stop for visitors. The island is also known for its plum orchards and a distinctive prune-based sweet.',
      el: 'Μέρη της ταινίας Mamma Mia! του 2008 γυρίστηκαν στη Σκόπελο, συμπεριλαμβανομένου ενός μικρού εκκλησάκι πάνω σε θαλασσινό βράχο που έκτοτε έχει γίνει δημοφιλής στάση για επισκέπτες. Το νησί είναι επίσης γνωστό για τους δαμασκηνεώνες του και ένα χαρακτηριστικό γλυκό με βάση το δαμάσκηνο.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Skopelos Town harbour', 'Mamma Mia! chapel viewpoint', 'Panormos & Milia beaches', 'Plum orchards & local sweets'],
      el: ['Λιμάνι Σκοπέλου', 'Εκκλησάκι από το Mamma Mia!', 'Παραλίες Πάνορμος & Μηλιά', 'Δαμασκηνεώνες & τοπικά γλυκά']
    }
  },
  {
    slug: 'aegina',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Aegina', el: 'Αίγινα' },
    tagline: { en: 'Pistachios and an easy day trip', el: 'Φιστίκια και εύκολη ημερήσια εκδρομή' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Temple_of_Aphaia_in_February_2005_14.jpg?width=1400',
    credit: 'Runner1928, CC BY-SA 4.0',
    desc: {
      en: 'Aegina, roughly an hour from Piraeus by ferry, is the closest of the Saronic Islands to Athens and a popular day trip. The well-preserved Temple of Aphaia stands on a pine-covered hill overlooking the sea, one of the few ancient Greek temples still largely intact.',
      el: 'Η Αίγινα, περίπου μία ώρα από τον Πειραιά με πλοίο, είναι το κοντινότερο στην Αθήνα από τα Σαρωνικά νησιά και δημοφιλής προορισμός για ημερήσια εκδρομή. Ο καλοδιατηρημένος ναός της Αφαίας στέκεται σε έναν πευκόφυτο λόφο με θέα στη θάλασσα, ένας από τους λίγους αρχαίους ελληνικούς ναούς που παραμένουν σε μεγάλο βαθμό ακέραιοι.'
    },
    more: {
      en: 'The island is Greece\'s main producer of pistachios, sold from roadside stalls and worked into everything from ice cream to spreads. Aegina Town\'s harbour, lined with fishing boats and neoclassical buildings, briefly served as the first capital of independent Greece in the 1820s.',
      el: 'Το νησί είναι ο κύριος παραγωγός φιστικιού στην Ελλάδα, που πωλείται από πάγκους στον δρόμο και χρησιμοποιείται σε όλα, από παγωτό μέχρι επάλειψη. Το λιμάνι της πόλης της Αίγινας, με ψαρόβαρκες και νεοκλασικά κτίρια, υπήρξε για λίγο η πρώτη πρωτεύουσα της ανεξάρτητης Ελλάδας τη δεκαετία του 1820.'
    },
    best: { en: 'April–October, easy year-round as a short trip from Athens', el: 'Απρίλιος–Οκτώβριος, εύκολη πρόσβαση όλο τον χρόνο ως σύντομη εκδρομή από την Αθήνα' },
    highlights: {
      en: ['Temple of Aphaia', 'Local pistachios', 'Aegina Town harbour', 'Moni islet nature reserve'],
      el: ['Ναός της Αφαίας', 'Τοπικό φιστίκι', 'Λιμάνι της πόλης Αίγινας', 'Φυσικό καταφύγιο νησίδας Μονή']
    }
  },
  {
    slug: 'syros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Syros', el: 'Σύρος' },
    tagline: { en: 'Neoclassical capital of the Cyclades', el: 'Νεοκλασική πρωτεύουσα των Κυκλάδων' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_of_the_central_square_of_Ermoupolis_%28Miaouli_square%29%2C_Syros_-_Greece_-_panoramio.jpg?width=1400',
    credit: 'Panoramio upload bot, CC BY-SA 3.0',
    desc: {
      en: 'Syros stands apart from the typical whitewashed-Cycladic look, with its capital Ermoupoli built up in tiers of neoclassical mansions during the 19th century, when it was one of Greece\'s busiest shipping and trading ports.',
      el: 'Η Σύρος ξεχωρίζει από τη συνηθισμένη ασβεστωμένη κυκλαδίτικη εικόνα, με την πρωτεύουσά της, την Ερμούπολη, χτισμένη σε σειρές από νεοκλασικά αρχοντικά τον 19ο αιώνα, όταν ήταν ένα από τα πιο πολυσύχναστα λιμάνια εμπορίου και ναυτιλίας της Ελλάδας.'
    },
    more: {
      en: 'The island remains the administrative capital of the Cyclades and has a year-round population and working shipyards, giving it a different rhythm from more tourist-dependent islands nearby. Miaouli Square, ringed by cafés and the marble-fronted town hall, is the centre of daily life in Ermoupoli.',
      el: 'Το νησί παραμένει η διοικητική πρωτεύουσα των Κυκλάδων και έχει μόνιμο πληθυσμό και ναυπηγεία σε λειτουργία όλο τον χρόνο, κάτι που του δίνει διαφορετικό ρυθμό από πιο τουριστικά νησιά της περιοχής. Η πλατεία Μιαούλη, περιτριγυρισμένη από καφέ και το μαρμάρινο δημαρχείο, είναι το κέντρο της καθημερινής ζωής στην Ερμούπολη.'
    },
    best: { en: 'May–September, pleasant year-round for a city-style visit', el: 'Μάιος–Σεπτέμβριος, ευχάριστο όλο τον χρόνο για επίσκεψη σε στιλ πόλης' },
    highlights: {
      en: ['Miaouli Square & town hall', 'Ano Syros hilltop old town', 'Vaporia neoclassical mansions', 'Apollo Theatre'],
      el: ['Πλατεία Μιαούλη & δημαρχείο', 'Άνω Σύρος στην κορυφή του λόφου', 'Νεοκλασικά αρχοντικά στα Βαπόρια', 'Θέατρο Απόλλων']
    }
  },
  {
    slug: 'spetses',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Spetses', el: 'Σπέτσες' },
    tagline: { en: 'Horse-drawn carriages, no cars in town', el: 'Άμαξες με άλογα, χωρίς αυτοκίνητα στην πόλη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spetses_Port_and_Agios_Mamas_Beach_on_Spetses%2C_Greece_%2848760450917%29.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY 2.0',
    desc: {
      en: 'Spetses restricts cars in its main town, so horse-drawn carriages and bicycles are still a common way to get around. The waterfront is lined with grand 19th-century mansions built by the island\'s shipowning families, who played a leading role in the Greek War of Independence.',
      el: 'Η Σπέτσες περιορίζει τα αυτοκίνητα στην κύρια πόλη της, οπότε οι άμαξες με άλογα και τα ποδήλατα παραμένουν συνηθισμένος τρόπος μετακίνησης. Η παραλιακή είναι γεμάτη με επιβλητικά αρχοντικά του 19ου αιώνα, χτισμένα από τις εφοπλιστικές οικογένειες του νησιού, που έπαιξαν πρωταγωνιστικό ρόλο στην Ελληνική Επανάσταση.'
    },
    more: {
      en: 'The island was also the setting for John Fowles\' novel The Magus, and its pine-covered coastline has small pebble coves reachable by water taxi. Spetses is close enough to Athens for a weekend trip, but has kept a quieter, more residential feel than some of the other Saronic islands.',
      el: 'Το νησί ήταν επίσης το σκηνικό του μυθιστορήματος «Ο Μάγος» του John Fowles, και η πευκόφυτη ακτογραμμή του έχει μικρούς κολπίσκους με βότσαλα προσβάσιμους με υδροταξί. Η Σπέτσες βρίσκεται αρκετά κοντά στην Αθήνα για ένα Σαββατοκύριακο, αλλά έχει διατηρήσει πιο ήσυχη, πιο οικιστική ατμόσφαιρα από άλλα Σαρωνικά νησιά.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Horse-drawn carriage rides', 'Old Harbour mansions', 'Water-taxi beach coves', 'Bekiris Cave'],
      el: ['Βόλτα με άμαξα', 'Αρχοντικά στο Παλιό Λιμάνι', 'Κολπίσκοι με υδροταξί', 'Σπηλιά Μπεκίρη']
    }
  },
  {
    slug: 'athens',
    group: 'cities',
    groupName: { en: 'Mainland cities', el: 'Ηπειρωτικές πόλεις' },
    name: { en: 'Athens', el: 'Αθήνα' },
    tagline: { en: 'The Acropolis and ancient history', el: 'Η Ακρόπολη και η αρχαία ιστορία' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acropolis_Parthenon_Athens_Greece.jpg?width=1400',
    credit: 'Jebulon, CC0 (public domain)',
    desc: {
      en: "Athens, Greece's capital, is built around the Acropolis, the rocky hill crowned by the Parthenon that has watched over the city for roughly 2,500 years. Most visitors combine the ancient sites with the narrow streets of Plaka, the old quarter beneath the rock.",
      el: 'Η Αθήνα, πρωτεύουσα της Ελλάδας, είναι χτισμένη γύρω από την Ακρόπολη, τον βραχώδη λόφο που στέφεται από τον Παρθενώνα και επιβλέπει την πόλη εδώ και περίπου 2.500 χρόνια. Οι περισσότεροι επισκέπτες συνδυάζουν τους αρχαίους χώρους με τα στενά δρομάκια της Πλάκας, της παλιάς συνοικίας κάτω από τον βράχο.'
    },
    more: {
      en: "Athens is also Greece's main ferry hub, with the port of Piraeus connecting to nearly every island group, which makes the city a natural starting or ending point for an island-hopping trip. Beyond the Acropolis, the Acropolis Museum, the National Archaeological Museum and the lively neighbourhoods of Monastiraki and Psiri round out a city visit.",
      el: 'Η Αθήνα είναι επίσης ο κύριος ακτοπλοϊκός κόμβος της Ελλάδας, με το λιμάνι του Πειραιά να συνδέεται με σχεδόν κάθε νησιωτικό σύμπλεγμα, γεγονός που κάνει την πόλη φυσικό σημείο εκκίνησης ή ολοκλήρωσης ενός ταξιδιού island hopping. Πέρα από την Ακρόπολη, το Μουσείο της Ακρόπολης, το Εθνικό Αρχαιολογικό Μουσείο και οι ζωντανές γειτονιές του Μοναστηρακίου και του Ψυρρή συμπληρώνουν μια επίσκεψη στην πόλη.'
    },
    best: { en: 'April–June & September–October', el: 'Απρίλιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος' },
    highlights: {
      en: ['Acropolis & Parthenon', 'Acropolis Museum', 'Plaka & Monastiraki', 'Piraeus ferry port'],
      el: ['Ακρόπολη & Παρθενώνας', 'Μουσείο Ακρόπολης', 'Πλάκα & Μοναστηράκι', 'Λιμάνι Πειραιά']
    }
  },
  {
    slug: 'thessaloniki',
    group: 'cities',
    groupName: { en: 'Mainland cities', el: 'Ηπειρωτικές πόλεις' },
    name: { en: 'Thessaloniki', el: 'Θεσσαλονίκη' },
    tagline: { en: "Greece's northern capital", el: 'Η βόρεια πρωτεύουσα της Ελλάδας' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/White_Tower_in_Thessaloniki.jpg?width=1400',
    credit: 'Haneburger, CC BY-SA 4.0',
    desc: {
      en: "Thessaloniki, Greece's second-largest city, stretches along the Thermaic Gulf with the White Tower, its best-known landmark, standing on the waterfront promenade. The city layers Byzantine churches, Ottoman-era buildings and a lively student population.",
      el: 'Η Θεσσαλονίκη, η δεύτερη μεγαλύτερη πόλη της Ελλάδας, απλώνεται κατά μήκος του Θερμαϊκού κόλπου, με τον Λευκό Πύργο, το πιο γνωστό της ορόσημο, να στέκεται στην παραλιακή προμενάδα. Η πόλη συνδυάζει βυζαντινές εκκλησίες, κτίρια της οθωμανικής περιόδου και έναν ζωντανό φοιτητικό πληθυσμό.'
    },
    more: {
      en: "Several of the city's Byzantine churches, including the Rotunda and Agios Dimitrios, are listed as UNESCO World Heritage Sites. Thessaloniki is also widely regarded as Greece's food capital, known for street snacks like bougatsa and a lively market district around Modiano.",
      el: 'Αρκετές από τις βυζαντινές εκκλησίες της πόλης, συμπεριλαμβανομένων της Ροτόντας και του Αγίου Δημητρίου, είναι μνημεία παγκόσμιας κληρονομιάς της UNESCO. Η Θεσσαλονίκη θεωρείται επίσης ευρέως η γαστρονομική πρωτεύουσα της Ελλάδας, γνωστή για σνακ του δρόμου όπως η μπουγάτσα και μια ζωντανή αγορά γύρω από το Μοδιάνο.'
    },
    best: { en: 'April–June & September–October', el: 'Απρίλιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος' },
    highlights: {
      en: ['White Tower', 'Rotunda & Agios Dimitrios', 'Modiano Market', 'Ano Poli old town'],
      el: ['Λευκός Πύργος', 'Ροτόντα & Άγιος Δημήτριος', 'Αγορά Μοδιάνο', 'Άνω Πόλη']
    }
  }
];
