import React, { useState } from 'react';
import Image from 'next/image';
import { User, CreditCard, Shield, HelpCircle, Check, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

interface UserData {
  name: string;
  email: string;
  legalName: string;
  preferredName: string;
  dateOfBirth: Date;
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
    dateOfBirth: '27/08/1998',
    gender: 'Male',
    phoneNumber: '+123 4567 890',
    emergencyContact: '+123 4567 890',
    governmentId: '1234567890'
  });

  const [editingField, setEditingField] = useState<keyof UserData | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (field: keyof UserData) => {
    setEditingField(field);
    if (field === 'dateOfBirth' && userData[field] !== '27/08/1998') {
      setEditValue(new Date(userData[field]).toISOString().split('T')[0]);
    } else {
      setEditValue(userData[field]);
    }
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
                { icon: User, text: 'Personal Info', href: '/personal-info' },
                { icon: CreditCard, text: 'Payments and Payouts', href: '/payments-payouts' },
                { icon: Shield, text: 'Security and Settings', href: '/security-settings' },
                { icon: HelpCircle, text: 'Help and Feedback', href: '/help-feedback' },
              ].map((item, index) => (
                <Link key={index} href={item.href} className="flex items-center space-x-2 w-full px-3 py-7 rounded border text-sm">
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </Link>
              ))}
            </nav>
            <button className="w-full text-blue-500 mt-8 text-center text-sm flex justify-center items-center">Sign Out</button>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Hi, {userData.name}</h1>
            <p className="text-gray-600 mb-6 text-sm">{userData.email}</p>
            <div className="border shadow rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Personal Info</h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">Make sure your information matches your Travel Id, like your Passport or license</p>
              {Object.entries(userData).map(([key, value]) => (
                key !== 'name' && key !== 'email' && (
                  <div key={key} className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-semibold text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      {editingField === key ? (
                        key === 'dateOfBirth' ? (
                          <DatePicker
                            selected={editValue ? new Date(editValue) : null}
                            onChange={(date: Date) => setEditValue(date.toISOString().split('T')[0])}
                            dateFormat="yyyy-MM-dd"
                            className="mt-1 block w-full p-4 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        ) : (
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="mt-1 block w-full p-4 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        )
                      ) : (
                        <p className="font-medium text-md">{value}</p>
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