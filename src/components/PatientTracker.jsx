import React, { useState } from 'react';

function PatientTracker() {
  const [patients, setPatients] = useState([
    { id: 'P01', name: 'Jaiminpuri Bava', room: '101-A' },
    { id: 'P02', name: 'Patel Brijesh', room: '102-B' },
    { id: 'P03', name: 'Prajapati Harsh', room: '105-A' }
  ]);
  const [newName, setNewName] = useState('');

  function addPatient() {
    if (newName.trim() === '') return;

    const newId = 'P0' + (patients.length + 1);
    const newPatient = { id: newId, name: newName, room: '201-B' };

    const updatedList = patients.concat(newPatient);
    setPatients(updatedList);
    setNewName('');
  }

  function dischargePatient(patientId) {
    const filteredList = patients.filter(function(item) {
      return item.id !== patientId;
    });
    setPatients(filteredList);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-sky-200/80">
      <div className="border-b border-sky-100 pb-3 mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
          Hospital Patient Monitor
        </h2>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          onClick={addPatient}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition"
        >
          Admit
        </button>
      </div>

      <div className="space-y-2.5">
        {patients.map(function(patient) {
          return (
            <div
              key={patient.id}
              className="p-3.5 bg-sky-50/70 border border-sky-200/80 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-sky-950 text-sm">
                  {patient.name} <span className="text-xs text-sky-700">({patient.id})</span>
                </p>
                <p className="text-xs text-slate-600 mt-0.5">Room: <span className="font-semibold text-slate-700">{patient.room}</span></p>
              </div>
              <button
                onClick={() => dischargePatient(patient.id)}
                className="bg-rose-500 hover:bg-rose-600 text-white text-xs px-3 py-1.5 rounded-md font-semibold transition"
              >
                Discharge
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PatientTracker;
