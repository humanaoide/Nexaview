import Card from '../components/Card'

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'MD. CHAND',
    role: 'CEO & FOUNDER',
    image: '/team/MD CHAND.jpeg',
    bio: 'Visionary leader with a passion for making technology accessible. TEAM HOLDER AND CEO FOR A REASON.'
  },
  {
    name: 'MD. EHSAAN',
    role: 'COO & FOUNDER',
    image: '/team/EHSAAN.jpeg',
    bio: ' leads the operational engine of our organization. He is responsible for ensuring that NexaView technical vision is implemented on the ground with efficiency and stability'
  },
  {
    name: 'AYUSH KUMAR SINGH',
    role: 'CMO & FOUNDER',
    image: '/team/AYUSH KUMAR SINGH.jpeg',
    bio: 'CLASS 11TH PCB FULL STACK DEVELOPER, GOOD WITH PYTHON WORK AND AI, TECHNICAL HEAD & MARKETING HEAD.'
  },
  {
    name: 'ADITYA GUPTA',
    role: 'CFO & FOUNDER',
    image: '/team/ADITYA GUPTA.jpeg',
    bio: 'class 11 pcm students, Dream graduation from IIT Bombay B-Tech computer science engineering. JEE Aspirants. financial head.'
  },
  {
    name: 'AYUSH YADAV',
    role: 'HR & FOUNDER',
    image: '/team/AYUSH YADAV.jpeg',
    bio: 'Overseeing talent strategy, culture development, and operational excellence to support our mission of creating innovative, future-driven technology. Dedicated to building a high-performance team and guiding the people who power NexaView vision. HR for a reason'
  }
]

const Team = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Meet the Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate group of students and professionals dedicated to revolutionizing smart eyewear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center animate-slide-up" style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden border-4 border-neon-orange/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-neon-blue mb-2">
                {member.name}
              </h3>
              <p className="text-neon-orange font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Join Our Mission
            </h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our passion for innovation and accessibility.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-neon-orange to-neon-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-orange/50 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Team

