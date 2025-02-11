"use client";

import { useState } from "react";

type Lead = {
  name: string;
  address: string;
  phone: string;
  relevant: boolean | null;
};

export default function LeadsList() {
  // Placeholder data
  const initialLeads: Lead[] = [
    {
      name: "Joe's Cafe",
      address: "123 Main St, Berlin",
      phone: "030-1234567",
      relevant: null,
    },
    {
      name: "Tech Solutions",
      address: "456 Second Ave, Hamburg",
      phone: "040-7654321",
      relevant: null,
    },
    {
      name: "Green Pharmacy",
      address: "789 Third Blvd, München",
      phone: "089-5555555",
      relevant: null,
    },
  ];

  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  // Handler to update the relevance status
  const handleSetRelevance = (index: number, isRelevant: boolean) => {
    setLeads((prevLeads) => {
      const updated = [...prevLeads];
      updated[index] = {
        ...updated[index],
        relevant: isRelevant,
      };
      return updated;
    });
  };

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Leads-Liste</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Adresse</th>
              <th className="p-3 text-left">Telefon</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.address}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSetRelevance(index, true)}
                      className={`px-2 py-1 rounded ${
                        lead.relevant === true
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      Relevant
                    </button>
                    <button
                      onClick={() => handleSetRelevance(index, false)}
                      className={`px-2 py-1 rounded ${
                        lead.relevant === false
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      Irrelevant
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
