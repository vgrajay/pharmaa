package com.example.apis.service;

import com.example.apis.model.Medicine;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PharmacyService {

    // In-memory storage
    private final List<Medicine> inventory = new ArrayList<>();

    // Sample data
    public PharmacyService() {
    	Medicine m1 = new Medicine();
    	m1.setId(101);
    	m1.setName("Paracetamol");
    	m1.setPrice(25);
    	m1.setQuantity(50);
    	m1.setExpiryDate(LocalDate.of(2025, 8, 12));
    	m1.setCompany("Cipla");
    	inventory.add(m1);

    	Medicine m2 = new Medicine();
    	m2.setId(102);
    	m2.setName("Amoxicillin");
    	m2.setPrice(80);
    	m2.setQuantity(30);
    	m2.setExpiryDate(LocalDate.of(2024, 3, 10)); // expired
    	m2.setCompany("Sun Pharma");
    	inventory.add(m2);

    	Medicine m3 = new Medicine();
    	m3.setId(103);
    	m3.setName("Cetirizine");
    	m3.setPrice(15);
    	m3.setQuantity(100);
    	m3.setExpiryDate(LocalDate.of(2026, 1, 5));
    	m3.setCompany("Dr Reddy's");
    	inventory.add(m3);

    	Medicine m4 = new Medicine();
    	m4.setId(104);
    	m4.setName("Azithromycin");
    	m4.setPrice(120);
    	m4.setQuantity(40);
    	m4.setExpiryDate(LocalDate.of(2024, 6, 15)); // expired
    	m4.setCompany("Cipla");
    	inventory.add(m4);

    	Medicine m5 = new Medicine();
    	m5.setId(105);
    	m5.setName("Pantoprazole");
    	m5.setPrice(55);
    	m5.setQuantity(60);
    	m5.setExpiryDate(LocalDate.of(2025, 11, 20));
    	m5.setCompany("Lupin");
    	inventory.add(m5);

    	Medicine m6 = new Medicine();
    	m6.setId(106);
    	m6.setName("Metformin");
    	m6.setPrice(60);
    	m6.setQuantity(80);
    	m6.setExpiryDate(LocalDate.of(2026, 4, 30));
    	m6.setCompany("Sun Pharma");
    	inventory.add(m6);

    	Medicine m7 = new Medicine();
    	m7.setId(107);
    	m7.setName("Ibuprofen");
    	m7.setPrice(40);
    	m7.setQuantity(70);
    	m7.setExpiryDate(LocalDate.of(2024, 2, 28)); // expired
    	m7.setCompany("Abbott");
    	inventory.add(m7);

    	Medicine m8 = new Medicine();
    	m8.setId(108);
    	m8.setName("Vitamin C");
    	m8.setPrice(30);
    	m8.setQuantity(120);
    	m8.setExpiryDate(LocalDate.of(2025, 9, 18));
    	m8.setCompany("Himalaya");
    	inventory.add(m8);

    	Medicine m9 = new Medicine();
    	m9.setId(109);
    	m9.setName("Amlodipine");
    	m9.setPrice(50);
    	m9.setQuantity(45);
    	m9.setExpiryDate(LocalDate.of(2026, 7, 10));
    	m9.setCompany("Torrent");
    	inventory.add(m9);

    	Medicine m10 = new Medicine();
    	m10.setId(110);
    	m10.setName("Losartan");
    	m10.setPrice(75);
    	m10.setQuantity(55);
    	m10.setExpiryDate(LocalDate.of(2024, 5, 1)); // expired
    	m10.setCompany("Zydus");
    	inventory.add(m10);

    	Medicine m11 = new Medicine();
    	m11.setId(111);
    	m11.setName("Atorvastatin");
    	m11.setPrice(90);
    	m11.setQuantity(65);
    	m11.setExpiryDate(LocalDate.of(2026, 2, 14));
    	m11.setCompany("Pfizer");
    	inventory.add(m11);

    	Medicine m12 = new Medicine();
    	m12.setId(112);
    	m12.setName("Clopidogrel");
    	m12.setPrice(110);
    	m12.setQuantity(35);
    	m12.setExpiryDate(LocalDate.of(2025, 12, 31));
    	m12.setCompany("Sanofi");
    	inventory.add(m12);

    	Medicine m13 = new Medicine();
    	m13.setId(113);
    	m13.setName("Atenolol");
    	m13.setPrice(45);
    	m13.setQuantity(90);
    	m13.setExpiryDate(LocalDate.of(2024, 1, 20)); // expired
    	m13.setCompany("Cipla");
    	inventory.add(m13);

    	Medicine m14 = new Medicine();
    	m14.setId(114);
    	m14.setName("Ramipril");
    	m14.setPrice(70);
    	m14.setQuantity(40);
    	m14.setExpiryDate(LocalDate.of(2026, 8, 25));
    	m14.setCompany("Dr Reddy's");
    	inventory.add(m14);

    	Medicine m15 = new Medicine();
    	m15.setId(115);
    	m15.setName("Telmisartan");
    	m15.setPrice(85);
    	m15.setQuantity(50);
    	m15.setExpiryDate(LocalDate.of(2025, 3, 5));
    	m15.setCompany("Lupin");
    	inventory.add(m15);

    	Medicine m16 = new Medicine();
    	m16.setId(116);
    	m16.setName("Diclofenac");
    	m16.setPrice(35);
    	m16.setQuantity(75);
    	m16.setExpiryDate(LocalDate.of(2024, 4, 18)); // expired
    	m16.setCompany("Viatris");
    	inventory.add(m16);

    	Medicine m17 = new Medicine();
    	m17.setId(117);
    	m17.setName("Insulin");
    	m17.setPrice(350);
    	m17.setQuantity(20);
    	m17.setExpiryDate(LocalDate.of(2025, 6, 30));
    	m17.setCompany("Novo Nordisk");
    	inventory.add(m17);

    	Medicine m18 = new Medicine();
    	m18.setId(118);
    	m18.setName("Salbutamol");
    	m18.setPrice(65);
    	m18.setQuantity(55);
    	m18.setExpiryDate(LocalDate.of(2026, 10, 12));
    	m18.setCompany("GSK");
    	inventory.add(m18);

    	Medicine m19 = new Medicine();
    	m19.setId(119);
    	m19.setName("Omeprazole");
    	m19.setPrice(45);
    	m19.setQuantity(60);
    	m19.setExpiryDate(LocalDate.of(2024, 7, 7)); // expired
    	m19.setCompany("Sun Pharma");
    	inventory.add(m19);

    	Medicine m20 = new Medicine();
    	m20.setId(120);
    	m20.setName("Levothyroxine");
    	m20.setPrice(95);
    	m20.setQuantity(30);
    	m20.setExpiryDate(LocalDate.of(2026, 12, 1));
    	m20.setCompany("Abbott");
    	inventory.add(m20);

    }

    /* =======================
       GET ALL MEDICINES
    ======================= */
    public List<Medicine> getAllMedicines() {
        return inventory;
    }

    /* =======================
       ADD MEDICINE
    ======================= */
    public void addMedicine(Medicine medicine) {
        inventory.add(medicine);
    }

    /* =======================
       DELETE MEDICINE BY ID
    ======================= */
    public boolean removeMedicineById(int id) {
        return inventory.removeIf(m -> m.getId() == id);
    }

    /* =======================
       GET EXPIRED MEDICINES
    ======================= */
    public List<Medicine> getExpiredMedicines() {
        LocalDate today = LocalDate.now();
        List<Medicine> expired = new ArrayList<>();

        for (Medicine m : inventory) {
            if (m.getExpiryDate().isBefore(today)) {
                expired.add(m);
            }
        }
        return expired;
    }
}
