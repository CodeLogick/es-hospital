'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Star, Calendar, MessageCircle, X, ChevronRight, Heart, Stethoscope, Zap, Users, Shield, Truck } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: 'Consultation'
  });
  const [expandedBlog, setExpandedBlog] = useState<number | null>(null);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  const reviews = [
    {
      name: "Srinivas Reddy",
      rating: 5,
      text: "Excellent hospital with world-class facilities! The doctors are highly experienced and staff is very professional. Emergency care was swift and efficient. Highly recommend ES Hospital!",
      initials: "SR"
    },
    {
      name: "Kavya Sharma",
      rating: 5,
      text: "Had a successful surgery at ES Hospital. The surgical team was excellent and the post-operative care was exceptional. Clean facilities and caring staff throughout my stay.",
      initials: "KS"
    },
    {
      name: "Ramesh Kumar",
      rating: 5,
      text: "Great experience with emergency services. Quick response, professional staff, and comprehensive treatment. The hospital is well-equipped with modern technology.",
      initials: "RK"
    },
    {
      name: "Priya Menon",
      rating: 5,
      text: "Best diagnostic center in Perumbakkam! Accurate reports, skilled technicians, and comfortable environment. Regular checkups at ES Hospital now.",
      initials: "PM"
    },
    {
      name: "Arun Verma",
      rating: 5,
      text: "Pediatric care at ES Hospital is top-notch! Doctor explained everything clearly and made my child comfortable. Very happy with the treatment.",
      initials: "AV"
    },
    {
      name: "Divya Nair",
      rating: 5,
      text: "Outstanding maternity services! The team was supportive throughout pregnancy and delivery. Safe, clean, and professional hospital. Blessed to deliver here!",
      initials: "DN"
    }
  ];

  const departments = [
    {
      name: "General Surgery",
      icon: "🔪",
      desc: "Expert surgical care for general and emergency cases"
    },
    {
      name: "Orthopedics",
      icon: "🦴",
      desc: "Bone and joint disease treatment with latest technology"
    },
    {
      name: "Pediatrics",
      icon: "👶",
      desc: "Specialized care for infants, children and adolescents"
    },
    {
      name: "Obstetrics & Gynecology",
      icon: "👩‍⚕️",
      desc: "Complete maternity and women's health services"
    },
    {
      name: "Internal Medicine",
      icon: "💊",
      desc: "Comprehensive treatment of adult diseases"
    },
    {
      name: "Diagnostics",
      icon: "🔬",
      desc: "Advanced pathology and imaging services"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Common Surgical Procedures: What to Expect",
      excerpt: "Complete guide to preparing for surgery, what happens during the procedure, and post-operative recovery.",
      date: "Dec 22, 2024",
      author: "ES Hospital Medical Team",
      category: "Surgery",
      image: "🔪",
      content: `Before undergoing any surgical procedure, it's important to understand what to expect. This guide covers common surgical procedures performed at ES Hospital.

Pre-Operative Preparation:

1. Pre-Surgical Assessment
   - Blood tests and imaging
   - Anesthesia consultation
   - Medication review
   - Fasting instructions (usually 6-8 hours)
   - Informed consent

2. Day Before Surgery
   - Light meals only
   - Avoid alcohol and smoking
   - Arrange transportation
   - Wear comfortable clothing
   - Arrive early to hospital

3. Day of Surgery
   - Arrive 2 hours before
   - Change into surgical gown
   - Remove jewelry and accessories
   - IV line insertion
   - Pre-medication given
   - Transfer to operation theater

During Surgery:

1. Anesthesia Administration
   - General (full unconsciousness)
   - Regional (numbed area)
   - Local (small area numbness)
   - Continuous monitoring of vital signs

2. Surgical Procedure
   - Surgical team assembled
   - Operating field prepared
   - Sterile environment maintained
   - Surgeon performs procedure
   - Assistants support throughout
   - Duration varies by procedure

3. Monitoring
   - Heart rate and rhythm
   - Blood pressure
   - Oxygen levels
   - Temperature regulation
   - Blood loss monitoring

Post-Operative Care:

Recovery Room Phase (1-2 hours):
✓ Monitored closely
✓ Pain management
✓ Vital signs checked regularly
✓ Gradual awakening from anesthesia
✓ Nausea management if needed

Hospital Stay:
- Minor surgeries: Same day discharge
- Major surgeries: 2-5 days
- Complex cases: Longer stay

Recovery Timeline by Surgery Type:

Minor surgeries (4-6 weeks):
- Wound care and dressing changes
- Light activities
- Follow-up consultations
- Gradual return to normal

Major surgeries (8-12 weeks):
- Hospital discharge protocols
- Home care instructions
- Physiotherapy if needed
- Restricted activities
- Progressive rehabilitation

At ES Hospital:

✓ Modern operating theaters with advanced equipment
✓ Experienced surgical teams
✓ Comprehensive anesthesia management
✓ Post-operative care excellence
✓ Pain management protocols
✓ Infection prevention measures
✓ Patient comfort and safety priority

Common Questions:

Q: When can I eat after surgery?
A: Depends on anesthesia type - usually 6-8 hours

Q: When can I bathe?
A: After sutures removed (7-10 days typically)

Q: When can I resume work?
A: Varies - desk work in 1-2 weeks, physical work in 4-8 weeks

Q: What about pain after surgery?
A: Managed with prescribed medications

Recovery Tips:
- Follow post-operative instructions strictly
- Keep wound clean and dry
- Attend follow-up appointments
- Report unusual symptoms immediately
- Gradually increase activity
- Proper nutrition for healing

Trust ES Hospital for your surgical care!`
    },
    {
      id: 2,
      title: "Maternity at ES Hospital: Safe Delivery, Healthy Mother & Baby",
      excerpt: "Complete maternity care from pregnancy to post-delivery with expert gynecologists and modern facilities.",
      date: "Dec 18, 2024",
      author: "ES Hospital Medical Team",
      category: "Maternity",
      image: "👶",
      content: `Pregnancy and childbirth are beautiful experiences that deserve expert care. ES Hospital provides comprehensive maternity services.

Prenatal Care:

First Trimester (0-12 weeks):
✓ Confirmation of pregnancy
✓ Dating ultrasound
✓ Booking appointment
✓ Blood tests (group, Rh, infections)
✓ Initial assessment
✓ Nutritional counseling
✓ Warning sign education

Second Trimester (13-26 weeks):
✓ Detailed anatomy scan (20 weeks)
✓ Glucose screening
✓ Blood pressure monitoring
✓ Weight gain tracking
✓ Fetal development assessment
✓ Maternal health evaluation
✓ Exercise and lifestyle guidance

Third Trimester (27-40 weeks):
✓ Fetal position assessment
✓ Non-stress tests (if needed)
✓ Pelvic assessment
✓ Birth plan discussion
✓ Labor preparation classes
✓ Pain management options
✓ Delivery planning

Delivery Options at ES Hospital:

Natural Vaginal Delivery:
- With or without pain relief
- Safe and normal process
- Support person allowed
- Skin-to-skin contact encouraged
- Immediate bonding time

Assisted Vaginal Delivery:
- Vacuum or forceps assistance
- When needed for safety
- Done by experienced obstetricians
- Safe for mother and baby

Cesarean Section (C-section):
- Planned or emergency
- Modern operation theaters
- Experienced surgical team
- Spinal or general anesthesia
- Quick recovery protocols

Labor & Delivery:

Stages of Labor:

Stage 1: Active Labor (8-14 hours)
- Regular contractions
- Cervical dilation (0-10 cm)
- Fetal monitoring
- Pain management options
- Support and encouragement

Stage 2: Pushing (30 min - 2 hours)
- Active pushing with contractions
- Guided by healthcare team
- Mother-baby monitoring
- Safe delivery assistance
- Immediate delivery of baby

Stage 3: Placenta Delivery (5-30 minutes)
- Placenta expulsion
- Uterine monitoring
- Bleeding control
- Baby assessment begins
- First feeding if desired

Delivery Facilities at ES Hospital:
✓ Labor rooms with modern monitoring
✓ Delivery suites with advanced equipment
✓ 24/7 anesthesia availability
✓ Neonatal team on standby
✓ Emergency cesarean capability
✓ Patient comfort prioritized

Postnatal Care:

Immediate (First 24 hours):
- Vital sign monitoring
- Wound care
- Pain management
- Breastfeeding support
- Newborn screening tests
- Mother-baby bonding

Hospital Stay (2-3 days):
- Continued monitoring
- Medication administration
- Newborn care education
- Breastfeeding classes
- Dietary support
- Emotional support

Post-Discharge (6 weeks):
- Home care instructions
- Follow-up appointments (6 weeks)
- Newborn health monitoring
- Breastfeeding consultation
- Maternal health assessment
- Postnatal depression screening

Special Services:

High-Risk Pregnancy Management:
✓ Diabetes in pregnancy
✓ Hypertension management
✓ Multiple gestations
✓ Advanced maternal age
✓ Medical complications

NICU Services:
- Premature baby care
- Sick newborn care
- Specialized equipment
- Trained pediatric team
- Parental involvement

Lactation Support:
- Breastfeeding classes
- Lactation consultant
- Pump availability
- Troubleshooting help
- Nutrition counseling

Why Choose ES Hospital for Maternity:

✓ Experienced obstetric team
✓ Round-the-clock availability
✓ Modern delivery facilities
✓ Emergency care ready
✓ Newborn care expertise
✓ Patient-centered approach
✓ Safe, clean environment
✓ Supportive staff
✓ Family-friendly policies

Welcome to motherhood with ES Hospital!`
    },
    {
      id: 3,
      title: "Orthopedic Care: From Diagnosis to Recovery",
      excerpt: "Advanced orthopedic treatments for bone, joint, and muscle injuries with minimal invasiveness.",
      date: "Dec 15, 2024",
      author: "ES Hospital Medical Team",
      category: "Orthopedics",
      image: "🦴",
      content: `Orthopedic conditions affect millions. ES Hospital offers comprehensive bone and joint care.

Common Orthopedic Conditions:

Fractures & Breaks:
- Simple to complex fractures
- Compound fractures
- Pathological fractures
- Stress fractures
- Old fractures requiring revision

Joint Disorders:
- Osteoarthritis (wear and tear)
- Rheumatoid arthritis (inflammatory)
- Gout
- Joint instability
- Cartilage damage

Spine Problems:
- Herniated discs
- Spinal stenosis
- Scoliosis
- Degenerative disc disease
- Spinal cord compression

Ligament & Tendon Issues:
- ACL/MCL injuries
- Rotator cuff tears
- Achilles tendon rupture
- Ligament sprains
- Tendinitis

Diagnostic Approach:

Physical Examination:
✓ Range of motion assessment
✓ Muscle strength testing
✓ Pain evaluation
✓ Stability testing
✓ Special tests

Imaging Studies:
- X-rays (initial assessment)
- CT scans (detailed imaging)
- MRI (soft tissue visualization)
- Ultrasound (real-time assessment)
- Bone scans (metabolic activity)

Specialized Tests:
- EMG (nerve function)
- Arthroscopy (direct visualization)
- Lab tests (blood markers)

Treatment Options:

Conservative Management (Non-Surgical):

1. Rest & Ice
   - Reduce activity
   - Apply ice 15-20 minutes
   - Elevation for swelling
   - Compression bandaging

2. Medications
   - Pain relievers
   - Anti-inflammatory drugs
   - Muscle relaxants
   - Topical ointments

3. Physical Therapy
   - Strengthening exercises
   - Flexibility training
   - Gait training
   - Functional rehabilitation
   - Progressive advancement

4. Injections
   - Corticosteroid injections
   - Hyaluronic acid (joint lubrication)
   - Platelet-rich plasma (PRP)
   - Stem cell therapy (emerging)

Surgical Interventions:

Minimally Invasive Arthroscopy:
- Small incisions
- Camera visualization
- Tissue repair
- Debris removal
- Faster recovery

Joint Replacement:
- Knee replacement
- Hip replacement
- Shoulder replacement
- Ankle replacement
- Finger joint replacement

Spinal Surgery:
- Disc herniation repair
- Fusion surgery
- Decompression
- Vertebral stabilization

Fracture Fixation:
- Plate and screw fixation
- Intramedullary nailing
- External fixation
- Casting for simple breaks

Rehabilitation Timeline:

Phase 1 (0-6 weeks): Protection
- Reduce swelling
- Protect surgical site
- Gentle mobilization
- Pain management

Phase 2 (6-12 weeks): Restoration
- Increase strength
- Improve flexibility
- Progressive weight bearing
- Functional training

Phase 3 (12+ weeks): Return to Function
- Advanced exercises
- Sport-specific training
- Return to work
- Long-term maintenance

At ES Hospital:

✓ Board-certified orthopedic surgeons
✓ Modern operating theaters
✓ Advanced diagnostic equipment
✓ Comprehensive rehabilitation
✓ Physical therapy department
✓ Expert pain management
✓ Post-operative support
✓ Follow-up care excellence

Recovery Success Rates:
- Fracture healing: 95%+
- Joint replacement satisfaction: 90%+
- ACL reconstruction: 85%+
- Spine surgery outcomes: 80%+

Trust ES Hospital for your orthopedic health!`
    },
    {
      id: 4,
      title: "Pediatric Care: Nurturing Your Child's Health",
      excerpt: "Specialized healthcare for infants, children, and adolescents with compassionate expertise.",
      date: "Dec 12, 2024",
      author: "ES Hospital Medical Team",
      category: "Pediatrics",
      image: "👧",
      content: `Children deserve specialized medical care. ES Hospital's pediatric department provides expert care from newborn to teenager.

Newborn Care (0-28 days):

Screening & Tests:
✓ Apgar score assessment
✓ Newborn screening tests
✓ Hearing test
✓ Eye examination
✓ Heart murmur screening
✓ Metabolic disorders screening

First Checkups:
- Birth weight and measurements
- Feeding establishment
- Jaundice monitoring
- Cord care education
- Safe sleep practices
- Parental education

Vaccination Schedule:
- BCG (birth)
- Hepatitis B (birth)
- Pentavalent (6 weeks)
- PCV (6 weeks)
- Rotavirus (6 weeks)
- And many more...

Infant Care (1-12 months):

Developmental Milestones:
- Motor development (rolling, sitting, crawling)
- Cognitive development
- Social-emotional development
- Language development
- Hearing and vision assessment

Nutritional Guidance:
- Exclusive breastfeeding (6 months)
- Introduction of solids (6 months)
- Proper weaning
- Nutritional requirements
- Allergy introduction

Common Infant Issues:
- Colic and gas
- Reflux management
- Rashes and skin conditions
- Ear infections
- Respiratory infections
- Growth concerns

Childhood (1-12 years):

Well-Child Visits:
✓ Annual health checkups
✓ Immunization updates
✓ Growth and development tracking
✓ Behavioral assessment
✓ Nutritional evaluation
✓ Physical examination

Common Pediatric Conditions:
- Asthma management
- Allergies treatment
- Ear, nose, throat disorders
- Gastrointestinal issues
- Skin conditions
- Behavioral concerns
- Learning disabilities
- Anxiety and depression

Adolescent Care (12-18 years):

Health Screening:
✓ Physical examination
✓ Blood pressure monitoring
✓ Vision and hearing
✓ Scoliosis screening
✓ Sexual and reproductive health
✓ Mental health assessment

Preventive Care:
- HPV vaccination
- Flu and pneumonia shots
- Tetanus booster
- Meningococcal vaccine
- Counseling on:
  * Sexual health
  * Substance abuse prevention
  * Mental health
  * Nutrition and exercise
  * Academic stress

Adolescent Issues:
- Acne treatment
- Growth concerns
- Eating disorders
- Depression and anxiety
- Peer pressure issues
- School performance

Pediatric Emergency Care:

24/7 Emergency Services:
✓ Trauma and accidents
✓ Acute infections
✓ Breathing difficulties
✓ Seizures
✓ Allergic reactions
✓ Poisoning
✓ Choking
✓ Severe dehydration

Equipment for Kids:
- Pediatric-sized equipment
- Child-friendly environment
- Experienced pediatric nurses
- Minimal trauma approach
- Parental support

Common Pediatric Emergencies:
- Fever management
- Diarrhea and vomiting
- Cough and cold
- Fractures and injuries
- Abdominal pain
- Rashes and allergies

At ES Hospital Pediatrics:

✓ Pediatric specialists on staff
✓ Child-friendly environment
✓ Play areas and activities
✓ Parental involvement encouraged
✓ Vaccination programs
✓ Growth monitoring
✓ Developmental screening
✓ Behavioral counseling
✓ Emergency care 24/7
✓ Compassionate approach

Parenting Support:
- Nutrition counseling
- Behavioral guidance
- Sleep training
- Developmental milestones
- Vaccination education
- Parenting resources

Why Choose ES Hospital for Your Child:

✓ Board-certified pediatricians
✓ Kid-friendly facilities
✓ Comprehensive services
✓ Emergency preparedness
✓ Experienced nursing staff
✓ Supportive environment
✓ Evidence-based care
✓ Parental partnership

Your child's health is our priority at ES Hospital!`
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill all fields');
      return;
    }

    const message = `*Hospital Appointment Request*

*Patient Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.date}
*Preferred Time:* ${formData.time}
*Department/Service:* ${formData.service}

I would like to book an appointment at ES Hospital.

Please confirm the appointment.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/917305127365?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');

    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      service: 'Consultation'
    });

    setShowBookingModal(false);
    alert('Redirecting to WhatsApp. Please send the message to confirm your appointment!');
  };

  return (
    <div className="bg-white">
      {/* WhatsApp Widget */}
      {showWhatsApp && (
        <div className="fixed bottom-20 right-6 z-40">
          <a
            href="https://wa.me/917305127365?text=Hi%20ES%20Hospital,%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold hidden sm:inline">Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating CTA Button */}
      <button
        onClick={() => setShowBookingModal(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
        title="Book Appointment"
      >
        <Calendar className="w-6 h-6" />
      </button>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Book Appointment</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleBookAppointment} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="10-digit phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option>General Consultation</option>
                  <option>General Surgery</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Obstetrics & Gynecology</option>
                  <option>Internal Medicine</option>
                  <option>Diagnostics</option>
                  <option>Emergency Care</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                ✓ Your appointment details will be sent to WhatsApp for confirmation
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏥</span>
              <span className="text-xl font-bold text-gray-900">ES Hospital</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#departments" className="text-gray-700 hover:text-blue-600 transition">Departments</a>
              <a href="#facilities" className="text-gray-700 hover:text-blue-600 transition">Facilities</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">Reviews</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <button
              onClick={() => setShowBookingModal(true)}
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🏥 Multi-Specialty Hospital
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your <span className="text-blue-600">Health</span> is Our Priority
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ES Hospital - State-of-the-art multi-specialty hospital in Perumbakkam, Chennai with expert doctors, modern facilities, and compassionate care 24/7.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 font-semibold">4.8/5.0 Rating</p>
              </div>
              <div className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
                <p className="text-sm text-green-700 font-semibold">✓ 24/7 Emergency</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <span>→</span>
              </button>
              <a href="tel:7305127365" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center space-x-2">
                <span>☎️</span>
                <span>Call Now</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600">Beds</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10000+</p>
                <p className="text-sm text-gray-600">Annual Surgeries</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex flex-col items-center justify-center text-white p-8">
              <p className="text-6xl mb-6">🏥</p>
              <h3 className="text-3xl font-bold text-center mb-4">Excellence in Healthcare</h3>
              <p className="text-blue-100 text-center mb-8">Modern Facilities, Expert Care, Compassionate Service</p>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-blue-100">Total Beds</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-blue-100">Emergency</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-blue-100">Departments</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-sm text-blue-100">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare across multiple specialties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Advanced technology and infrastructure for optimal patient care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Advanced ICU",
                desc: "16-bed ICU with ventilators, monitors, and 24/7 specialist presence"
              },
              {
                icon: Stethoscope,
                title: "Modern Operation Theaters",
                desc: "5 equipped OTs with latest surgical equipment and anesthesia facilities"
              },
              {
                icon: Zap,
                title: "Diagnostic Center",
                desc: "CT, MRI, Ultrasound, X-ray, ECG, and laboratory services"
              },
              {
                icon: Users,
                title: "Emergency Department",
                desc: "24/7 equipped emergency care with trauma, cardiac, and pediatric sections"
              },
              {
                icon: Shield,
                title: "Infection Control",
                desc: "HEPA filtration, sterilization, and strict hygiene protocols"
              },
              {
                icon: Truck,
                title: "Ambulance Service",
                desc: "4 equipped ambulances with trained paramedics, 24/7 availability"
              }
            ].map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ 4.8/5.0 - Patient Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from people who've been cared at ES Hospital</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>

                <div className="flex items-center space-x-4 border-t pt-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Explore more reviews from our satisfied patients</p>
            <a
              href="https://www.google.com/maps/place/ES+Hospital/@12.8973553,80.1981134,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Health & Medical Blog</h2>
            <p className="text-xl text-gray-600">Expert medical insights and health guidance from our doctors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <button
                    onClick={() => setExpandedBlog(expandedBlog === post.id ? null : post.id)}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {expandedBlog === post.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                        {post.content}
                      </div>
                      <button
                        onClick={() => setExpandedBlog(null)}
                        className="mt-4 text-blue-600 font-semibold hover:text-blue-700"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Schedule Your Checkup Today
            </button>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Visit ES Hospital</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-full">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1611812397696!2d80.19811349999999!3d12.8973553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1c83e1c417%3A0xe04bcfd2a756ea8c!2sES%20Hospital!5e0!3m2!1sen!2sin!4v1779430662110!5m2!1sen!2sin"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <span className="text-2xl">📍</span>
                  <span>Location</span>
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Plot No. B, First Floor<br/>
                  Josen Towers<br/>
                  Nookampalayam Road<br/>
                  Opp. Pazhamudir Cholai<br/>
                  Perumbakkam, Chennai<br/>
                  Tamil Nadu - 600100
                </p>
                <a
                  href="https://www.google.com/maps/place/ES+Hospital/@12.8973553,80.1981134,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl border-l-4 border-cyan-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <span className="text-2xl">☎️</span>
                  <span>Contact</span>
                </h3>
                <a href="tel:7305127365" className="text-gray-700 text-lg font-bold hover:text-cyan-600 transition block">
                  +91 7305127365
                </a>
                <p className="text-gray-600 text-sm mt-2">24/7 Availability for Emergencies</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border-l-4 border-slate-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <span className="text-2xl">⏰</span>
                  <span>Hours</span>
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>OPD Hours:</strong> 9:00 AM - 9:00 PM (Daily)</p>
                  <p><strong>Emergency:</strong> 24/7 Available</p>
                  <p className="text-blue-600 font-bold mt-3">🚨 Urgent Care: Always Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Your Health is Our Mission</h2>
          <p className="text-lg mb-8 text-blue-100">Expert care, compassionate service, 24/7 availability</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Book Your Appointment
            </button>
            <a href="tel:7305127365" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              ☎️ Call Now: 7305127365
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Send us Your Query</h2>
          <p className="text-gray-600 text-center mb-12">We'll respond within 2 hours via WhatsApp</p>

          <form onSubmit={(e) => {
            e.preventDefault();

            const formElements = e.currentTarget.elements;
            const name = (formElements.namedItem('fullname') as HTMLInputElement)?.value;
            const email = (formElements.namedItem('email') as HTMLInputElement)?.value;
            const phone = (formElements.namedItem('phone') as HTMLInputElement)?.value;
            const service = (formElements.namedItem('service') as HTMLSelectElement)?.value;
            const message = (formElements.namedItem('message') as HTMLTextAreaElement)?.value;

            if (!name || !email || !phone || !service || !message) {
              alert('Please fill all fields');
              return;
            }

            const whatsappMessage = `*ES Hospital Query Submission*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Department Interest:* ${service}

*Message:*
${message}

Please get back to me as soon as possible. Thank you!`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappLink = `https://wa.me/917305127365?text=${encodedMessage}`;

            window.open(whatsappLink, '_blank');

            (e.currentTarget as HTMLFormElement).reset();

            alert('Redirecting to WhatsApp. Please send your message!');
          }} className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />

            <select
              name="service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            >
              <option value="">Select Department of Interest</option>
              <option value="General Surgery">General Surgery</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Emergency Care">Emergency Care</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message / Health Concerns"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <p className="text-xs text-gray-500 text-center">
              ✓ Your message will be sent directly to ES Hospital WhatsApp
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🏥</span>
                <span className="font-bold text-lg">ES Hospital</span>
              </div>
              <p className="text-gray-400 text-sm">Multi-specialty hospital providing comprehensive healthcare in Perumbakkam, Chennai</p>
              <div className="mt-4 space-y-2">
                <p className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐ 4.8/5.0 Rating</p>
                <p className="text-green-400 text-sm">✓ 24/7 Emergency</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#departments" className="hover:text-blue-400 transition">Departments</a></li>
                <li><a href="#facilities" className="hover:text-blue-400 transition">Facilities</a></li>
                <li><a href="#reviews" className="hover:text-blue-400 transition">Reviews</a></li>
                <li><a href="#blog" className="hover:text-blue-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Departments</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">General Surgery</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Orthopedics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pediatrics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Obstetrics & Gynecology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm mb-3">
                Perumbakkam<br/>
                Chennai, TN 600100
              </p>
              <p className="text-blue-400 font-bold text-lg">+91 7305127365</p>
              <p className="text-gray-400 text-xs mt-2">Emergency: 24/7</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2024 ES Hospital. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://www.google.com/maps/place/ES+Hospital/@12.8973553,80.1981134,15z" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm transition">Google Reviews</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}