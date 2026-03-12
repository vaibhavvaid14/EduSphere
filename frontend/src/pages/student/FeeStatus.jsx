import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import FeeSummary from '../../components/student/FeeSummary';
import PaymentHistory from '../../components/student/PaymentHistory';

const FeeStatus = () => {
    const mockFeeData = {
        totalDue: 45000,
        paidAmount: 25000,
        pendingAmount: 20000,
        lastPayment: { amount: 12000, type: 'Tuition', ref: 'TXN_9982341' }
    };

    const mockTransactions = [
        { id: 1, date: '2024-03-01', transactionId: 'TXN_9982341', type: 'Tuition', amount: 12000, status: 'paid' },
        { id: 2, date: '2024-02-15', transactionId: 'TXN_9982340', type: 'Hostel', amount: 8000, status: 'paid' },
        { id: 3, date: '2024-01-10', transactionId: 'TXN_9982339', type: 'Tuition', amount: 5000, status: 'paid' },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto space-y-8">
                <header>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Fee Status</h1>
                    <p className="text-gray-500 mt-1">Review your financial records and settlement history.</p>
                </header>

                <FeeSummary feeData={mockFeeData} />

                <div className="space-y-6">
                    <PaymentHistory transactions={mockTransactions} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FeeStatus;
