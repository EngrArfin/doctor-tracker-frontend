import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  Calendar,
  Award,
  Users,
  Stethoscope,
  UserPlus,
  Trash2,
} from 'lucide-react';
import { useDoctorTracker } from '@/context/DoctorTrackerContext';
import StatusBadge from '@/components/common/StatusBadge';
import EmptyState from '@/components/common/EmptyState';
import ConfirmDialog from '@/components/common/ConfirmDialog';
import PatientFormModal from '@/components/forms/PatientFormModal';

export const DoctorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getDoctorById, getPatientsByDoctorId, addPatient, deletePatient } = useDoctorTracker();

  const doctor = getDoctorById(id || '');
  const associatedPatients = id ? getPatientsByDoctorId(id) : [];

  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);
  const [patientToRemove, setPatientToRemove] = useState<{ id: string; name: string } | null>(null);

  if (!doctor) {
    return (
      <div className="py-12">
        <EmptyState
          title="Physician Not Found"
          description="The requested doctor record does not exist or was removed from the active directory."
          action={
            <Link
              to="/doctors"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl"
            >
              Back to Doctors Directory
            </Link>
          }
        />
      </div>
    );
  }

  const handleConfirmRemovePatient = () => {
    if (patientToRemove) {
      deletePatient(patientToRemove.id);
      setPatientToRemove(null);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Breadcrumb Back Link */}
      <div className="flex items-center justify-between">
        <Link
          to="/doctors"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Physicians Directory</span>
        </Link>
        <StatusBadge status={doctor.status} />
      </div>

      {/* Doctor Profile Banner Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <img
              src={doctor.avatarUrl}
              alt={doctor.name}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-slate-100 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                  {doctor.name}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <Stethoscope className="h-3 w-3" />
                  {doctor.specialization}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-slate-400" />
                <span>{doctor.hospital}</span>
                {doctor.roomNumber && (
                  <span className="text-slate-400">• {doctor.roomNumber}</span>
                )}
              </p>
              <div className="flex items-center gap-4 mt-3 text-xs text-slate-600 flex-wrap">
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  {doctor.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  {doctor.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsAddPatientModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <UserPlus className="h-4 w-4" />
              <span>Admit Patient under {doctor.name.split(' ')[1] || 'Doctor'}</span>
            </button>
          </div>
        </div>

        {/* Bio paragraph */}
        {doctor.bio && (
          <div className="mt-6 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-1">
              Physician Biography & Clinical Background
            </p>
            <p>{doctor.bio}</p>
            {doctor.education && (
              <p className="mt-2 text-xs text-slate-500 font-medium">
                <span className="text-slate-700 font-semibold">Credentials:</span> {doctor.education}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Current Caseload</span>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{associatedPatients.length} Active</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Assigned patients</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Experience</span>
            <Award className="h-4 w-4 text-teal-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900">{doctor.experienceYears} Years</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Clinical practice</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Physician Rating</span>
            <span className="text-amber-500">★</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{doctor.rating.toFixed(1)} / 5.0</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Patient satisfaction</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
            <span>Onboarding Date</span>
            <Calendar className="h-4 w-4 text-slate-400" />
          </div>
          <p className="text-lg sm:text-xl font-bold text-slate-900">{doctor.joinedDate}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Hospital credentialed</p>
        </div>
      </div>

      {/* Associated Patients Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Associated Patients ({associatedPatients.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Patients directly assigned under {doctor.name}'s care team
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAddPatientModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>+ Add Patient</span>
          </button>
        </div>

        {associatedPatients.length === 0 ? (
          <div className="py-8">
            <EmptyState
              title="No patients currently assigned"
              description={`There are currently no active patient records under ${doctor.name}.`}
              action={
                <button
                  type="button"
                  onClick={() => setIsAddPatientModalOpen(true)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 rounded-xl"
                >
                  Admit First Patient
                </button>
              }
            />
          </div>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200/80">
                <tr>
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="px-4 py-3">Condition / Diagnosis</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Blood Group</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Admitted Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {associatedPatients.map((pat) => (
                  <tr key={pat.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-full bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center shrink-0 ring-1 ring-teal-100">
                          {pat.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 block">{pat.name}</span>
                          <span className="text-[11px] text-slate-400 block">{pat.gender}, {pat.age} yrs</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-900">
                      {pat.condition}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-500">
                      <div>{pat.email}</div>
                      <div>{pat.phone}</div>
                    </td>
                    <td className="px-4 py-3.5 text-xs font-semibold text-slate-700">
                      {pat.bloodGroup || 'N/A'}
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={pat.status} size="sm" />
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-500">
                      {pat.registeredDate}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => setPatientToRemove({ id: pat.id, name: pat.name })}
                        title="Remove patient from list"
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Patient Modal */}
      <PatientFormModal
        isOpen={isAddPatientModalOpen}
        onClose={() => setIsAddPatientModalOpen(false)}
        defaultDoctorId={doctor.id}
        onSubmitPatient={addPatient}
        title={`Admit Patient under ${doctor.name}`}
      />

      {/* Confirm Remove Patient Dialog */}
      <ConfirmDialog
        isOpen={Boolean(patientToRemove)}
        title="Remove Patient Record"
        description={`Are you sure you want to remove ${patientToRemove?.name} from this doctor's care list?`}
        confirmLabel="Remove Patient"
        onConfirm={handleConfirmRemovePatient}
        onCancel={() => setPatientToRemove(null)}
      />
    </div>
  );
};

export default DoctorDetails;
