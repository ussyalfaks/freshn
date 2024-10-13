import React, { useState } from 'react';
import Image from 'next/image';
import { User, CreditCard, Shield, HelpCircle, Check, X } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  legalName: string;
  preferredName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  emergencyContact: string;
  governmentId: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: 'John',
    email: 'johnsmith@gmail.com',
    legalName: 'David Okpolo',
    preferredName: 'Dave',
    dateOfBirth: '--/--/----',
    gender: 'Male',
    phoneNumber: '+123 4567 890',
    emergencyContact: '+123 4567 890',
    governmentId: '1234567890'
  });

  const [editingField, setEditingField] = useState<keyof UserData | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (field: keyof UserData) => {
    setEditingField(field);
    setEditValue(userData[field]);
  };

  const handleSave = () => {
    if (editingField) {
      setUserData({ ...userData, [editingField]: editValue });
      setEditingField(null);
    }
  };

  const handleCancel = () => {
    setEditingField(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Image src="/freshinn-logo.png" alt="Freshinn Logo" width={40} height={40} />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-gray-600 hover:text-gray-800 text-sm sm:text-base">List your property</button>
            <button className="text-gray-600 hover:text-gray-800">
              <HelpCircle size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Image src="/globe-icon.png" alt="Language" width={20} height={20} />
            </button>
            <button className="bg-blue-500 text-white rounded-full p-1 sm:p-2">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="mb-8 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Upload Image</button>
            </div>
            <nav className="space-y-4">
              {[
                { icon: User, text: 'Personal Info' },
                { icon: CreditCard, text: 'Payments and Payouts' },
                { icon: Shield, text: 'Security and Settings' },
                { icon: HelpCircle, text: 'Help and Feedback' },
              ].map((item, index) => (
                <button key={index} className="flex items-center space-x-2 w-full p-3 bg-white rounded shadow text-sm">
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </button>
              ))}
            </nav>
            <button className="text-blue-500 mt-8 text-sm">Sign Out</button>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Hi, {userData.name}</h1>
            <p className="text-gray-600 mb-6 text-sm">{userData.email}</p>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Personal Info</h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">Make sure your information matches your Travel Id, like your Passport or license</p>
              {Object.entries(userData).map(([key, value]) => (
                key !== 'name' && key !== 'email' && (
                  <div key={key} className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      {editingField === key ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      ) : (
                        <p className="font-medium text-sm">{value}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {editingField === key ? (
                        <>
                          <button onClick={handleSave} className="text-green-500">
                            <Check size={20} />
                          </button>
                          <button onClick={handleCancel} className="text-red-500">
                            <X size={20} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEdit(key as keyof UserData)}
                          className="text-blue-500 text-xs sm:text-sm"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;