import React, { useState } from 'react';

function PatientTracker() {
  const [patients, setPatients] = useState([
    { id: 'P01', name: 'Ramesh Kumar', room: '101-A' },
    { id: 'P02', name: 'Suresh Verma', room: '102-B' },
    { id: 'P03', name: 'Anita Sharma', room: '105-A' }
  ]);
  const [newName, setNewName] = useState('');

  function addPatient() {
    if (newName.trim() === '') return;

    const newId = 'P0' + (patients.length + 1);
    const newPatient = { id: newId, name: newName, room: '201-B' };

    // Adding without spread operator
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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-cyan-800 mb-4">Hospital Patient Monitor</h2>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded text-sm"
        />
        <button
          onClick={addPatient}
          className="bg-cyan-600 text-white px-3 py-2 rounded text-sm hover:bg-cyan-700"
        >
          Admit
        </button>
      </div>

      <div className="space-y-2">
        {patients.map(function(patient) {
          return (
            <div
              key={patient.id}
              className="p-3 bg-cyan-50 border border-cyan-200 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-cyan-900 text-sm">
                  {patient.name} <span className="text-xs text-gray-500">({patient.id})</span>
                </p>
                <p className="text-xs text-gray-600">Room: {patient.room}</p>
              </div>
              <button
                onClick={() => dischargePatient(patient.id)}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
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
