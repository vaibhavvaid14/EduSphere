import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ExamForm from '../../components/student/ExamForm';

const ExaminationForm = () => {
    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto space-y-6">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Examination Form</h1>
                    <p className="text-gray-500 mt-1">Register for your end-semester examinations and select your subjects.</p>
                </header>

                <ExamForm />
            </div>
        </DashboardLayout>
    );
};

export default ExaminationForm;
