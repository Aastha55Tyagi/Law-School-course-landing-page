import React, { useState, useEffect } from 'react';

export default function EnrollModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'student',
    plan: 'full'
  });
  
  const [step, setStep] = useState(1); // 1 = form, 2 = success receipt
  const [errors, setErrors] = useState({});
  const [receiptNumber, setReceiptNumber] = useState('');

  // Update chosen plan when selectedPlan prop changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  // Generate a mock receipt number on success
  useEffect(() => {
    if (step === 2) {
      const rand = Math.floor(1000 + Math.random() * 9000);
      setReceiptNumber(`LLS-2026-${rand}`);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      status: 'student',
      plan: 'full'
    });
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="bg-paper border border-ink/20 w-full max-w-lg p-6 md:p-8 rounded-sm shadow-premium relative animate-reveal">
        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute top-4 right-4 text-ink-soft hover:text-wax text-xl font-mono"
        >
          ✕
        </button>

        {step === 1 ? (
          <>
            <div className="mb-6">
              <div className="font-mono text-[9px] tracking-widest text-wax uppercase mb-1">
                APPLICATION FORM
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink">
                Reserve Your Seat
              </h3>
              <p className="text-xs text-ink-soft mt-1">
                Fill in the details below to complete your registration request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              {/* Full Name */}
              <div>
                <label className="block text-ink font-semibold uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Shashank Sardesai"
                  className={`w-full bg-white border p-3 rounded-sm font-sans focus:outline-none focus:border-wax ${
                    errors.name ? 'border-wax' : 'border-ink/15'
                  }`}
                />
                {errors.name && <span className="text-[10px] text-wax mt-1 block">{errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-ink font-semibold uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. you@domain.com"
                  className={`w-full bg-white border p-3 rounded-sm font-sans focus:outline-none focus:border-wax ${
                    errors.email ? 'border-wax' : 'border-ink/15'
                  }`}
                />
                {errors.email && <span className="text-[10px] text-wax mt-1 block">{errors.email}</span>}
              </div>

              {/* Status */}
              <div>
                <label className="block text-ink font-semibold uppercase tracking-wider mb-1.5">
                  Professional Status
                </label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-ink/15 p-3 rounded-sm font-sans focus:outline-none focus:border-wax"
                >
                  <option value="student">Law Student (Undergraduate)</option>
                  <option value="litigator">Litigating Advocate</option>
                  <option value="corporate">Corporate Legal Counsel</option>
                  <option value="freelancer">Freelance Legal Consultant</option>
                </select>
              </div>

              {/* Select Program */}
              <div>
                <label className="block text-ink font-semibold uppercase tracking-wider mb-1.5">
                  Selected Program
                </label>
                <div className="grid grid-cols-2 gap-3 font-sans">
                  <label className={`flex flex-col p-3 border rounded-sm cursor-pointer transition-all ${
                    formData.plan === 'full' 
                      ? 'border-wax bg-wax/5 shadow-sm' 
                      : 'border-ink/15 hover:bg-black/5'
                  }`}>
                    <input 
                      type="radio" 
                      name="plan" 
                      value="full" 
                      checked={formData.plan === 'full'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-serif font-bold text-xs text-ink">6-Month Course</span>
                    <span className="font-mono text-[9px] text-wax font-semibold mt-1">Rs. 24,999</span>
                  </label>

                  <label className={`flex flex-col p-3 border rounded-sm cursor-pointer transition-all ${
                    formData.plan === 'short' 
                      ? 'border-wax bg-wax/5 shadow-sm' 
                      : 'border-ink/15 hover:bg-black/5'
                  }`}>
                    <input 
                      type="radio" 
                      name="plan" 
                      value="short" 
                      checked={formData.plan === 'short'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-serif font-bold text-xs text-ink">2-Month Course</span>
                    <span className="font-mono text-[9px] text-wax font-semibold mt-1">Rs. 7,999</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit"
                className="w-full bg-wax text-paper text-xs font-semibold font-mono tracking-wider py-4 mt-6 rounded-sm uppercase hover:bg-wax-bright transition-all duration-300 hover:shadow-[0_4px_12px_rgba(139,46,31,0.2)]"
              >
                Submit Application & Join →
              </button>
            </form>
          </>
        ) : (
          /* Receipt Success Step */
          <div className="text-center py-4 relative">
            {/* Dynamic Stamp Seal */}
            <div className="w-24 h-24 border-4 border-double border-emerald-600 rounded-full flex flex-col items-center justify-center mx-auto mb-6 transform -rotate-12 animate-seal bg-emerald-50/20 select-none pointer-events-none">
              <span className="font-mono text-[9px] font-bold text-emerald-700 tracking-wider">LLS ADMISSION</span>
              <span className="font-serif text-sm font-bold text-emerald-800">GRANTED</span>
              <span className="font-mono text-[8px] text-emerald-600">GOOD FAITH</span>
            </div>

            <h3 className="font-serif font-semibold text-2xl text-ink mb-2">
              Registration Successful!
            </h3>
            <p className="text-xs text-ink-soft max-w-sm mx-auto mb-8 font-sans">
              Welcome aboard, <strong>{formData.name}</strong>. Your seat has been reserved for the July 1 batch.
            </p>

            {/* Receipt Box */}
            <div className="bg-white border border-ink/10 p-5 rounded-sm text-left font-mono text-[11px] leading-relaxed text-ink-soft mb-8">
              <div className="border-b border-dashed border-ink/15 pb-2 mb-2 flex justify-between font-semibold text-ink">
                <span>RECEIPT & CONTRACT INCEPTION</span>
                <span>OFFICIAL</span>
              </div>
              <div className="flex justify-between">
                <span>Receipt Number:</span>
                <span className="text-ink font-semibold">{receiptNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Registrant:</span>
                <span className="text-ink">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Email Registered:</span>
                <span className="text-ink">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Course Program:</span>
                <span className="text-ink">
                  {formData.plan === 'full' ? '6-Month Mastering Course' : '2-Month Negotiation Course'}
                </span>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-2 mt-2 font-semibold text-wax">
                <span>Term of Commencement:</span>
                <span>July 1, 2026</span>
              </div>
            </div>

            <p className="text-[10px] text-ink-soft mb-6 font-sans">
              An onboarding agreement and access instructions have been dispatched to <strong>{formData.email}</strong>.
            </p>

            <button 
              onClick={handleReset}
              className="bg-ink text-paper text-xs font-semibold font-mono tracking-wider px-8 py-3.5 rounded-sm uppercase hover:bg-ink-soft transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
