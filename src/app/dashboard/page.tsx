import React from 'react'

export default function page() {
    return (
        <div className="flex-1 flex flex-col">
            {/* Top Bar */}
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
                <h2 className="text-xl font-semibold text-gray-800">Welcome back</h2>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-lg shadow p-6">
                            <div className="text-gray-600 text-sm font-medium mb-2">
                                Card {i}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">
                                {1000 * i}
                            </div>
                            <div className="text-green-600 text-sm">
                                +12% from last month
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
