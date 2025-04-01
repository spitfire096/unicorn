'use client';

import Counter from '../../component/Counter';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Welcome to your statistics dashboard</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-gray-500 text-sm">Total Views</h3>
                    <p className="text-2xl font-bold">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-gray-500 text-sm">Active Users</h3>
                    <p className="text-2xl font-bold">891</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
                    <p className="text-2xl font-bold">12.3%</p>
                </div>
            </div>

            {/* Counters Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Interactive Counters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Counter title="Daily Users" />
                    <Counter title="New Posts" />
                    <Counter title="Active Sessions" />
                </div>
            </div>
        </div>
    );
}
