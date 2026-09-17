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
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-teal-200">
      <h2 className="text-xl font-bold text-teal-900 mb-4 border-b border-teal-100 pb-2">
        Hospital Patient Monitor
      </h2>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-1 p-2 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={addPatient}
          className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
        >
          Admit
        </button>
      </div>

      <div className="space-y-2">
        {patients.map(function(patient) {
          return (
            <div
              key={patient.id}
              className="p-3 bg-teal-50/70 border border-teal-200 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-teal-950 text-sm">
                  {patient.name} <span className="text-xs text-teal-700">({patient.id})</span>
                </p>
                <p className="text-xs text-slate-600">Room: {patient.room}</p>
              </div>
              <button
                onClick={() => dischargePatient(patient.id)}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs px-3 py-1.5 rounded-md font-semibold transition"
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
