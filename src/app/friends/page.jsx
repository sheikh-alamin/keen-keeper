import Image from "next/image";
import Link from "next/link";

const FriendsPage = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case "overdue" : return "badge-error"
            case "almost due" : return "badge-warning"
            case "on-track" : return "badge-success"
            default : return "badge-primary"
        }
    }

    const friends = [
  {
    "id": 1,
    "name": "James Carter",
    "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    "email": "james.carter@gmail.com",
    "days_since_contact": 18,
    "status": "overdue",
    "tags": ["college", "close friend"],
    "bio": "Met in university freshman year. We used to pull all-nighters before exams.",
    "goal": 14,
    "next_due_date": "2026-04-10"
  },
  {
    "id": 2,
    "name": "Sophia Bennett",
    "picture": "https://randomuser.me/api/portraits/women/44.jpg",
    "email": "sophia.bennett@outlook.com",
    "days_since_contact": 6,
    "status": "on-track",
    "tags": ["work", "mentor"],
    "bio": "My first manager at the startup. Taught me everything about product thinking.",
    "goal": 10,
    "next_due_date": "2026-04-20"
  },
  {
    "id": 3,
    "name": "Marcus Thompson",
    "picture": "https://randomuser.me/api/portraits/men/75.jpg",
    "email": "marcus.t@yahoo.com",
    "days_since_contact": 12,
    "status": "almost due",
    "tags": ["hobby", "travel"],
    "bio": "We backpacked through Southeast Asia together. Always down for an adventure.",
    "goal": 14,
    "next_due_date": "2026-04-16"
  },
  {
    "id": 4,
    "name": "Aisha Rahman",
    "picture": "https://randomuser.me/api/portraits/women/68.jpg",
    "email": "aisha.rahman@gmail.com",
    "days_since_contact": 31,
    "status": "overdue",
    "tags": ["family", "childhood"],
    "bio": "Grew up next door to each other. She feels like a sister to me.",
    "goal": 21,
    "next_due_date": "2026-03-24"
  },
  {
    "id": 5,
    "name": "Ethan Nguyen",
    "picture": "https://randomuser.me/api/portraits/men/12.jpg",
    "email": "ethan.nguyen@proton.me",
    "days_since_contact": 4,
    "status": "on-track",
    "tags": ["work", "gaming"],
    "bio": "Colleagues turned close friends. We game every Friday night online.",
    "goal": 7,
    "next_due_date": "2026-04-18"
  },
  {
    "id": 6,
    "name": "Clara Müller",
    "picture": "https://randomuser.me/api/portraits/women/22.jpg",
    "email": "clara.muller@web.de",
    "days_since_contact": 9,
    "status": "almost due",
    "tags": ["college", "study group"],
    "bio": "We bonded over late-night library sessions during finals week every semester.",
    "goal": 10,
    "next_due_date": "2026-04-15"
  },
  {
    "id": 7,
    "name": "Daniel Okafor",
    "picture": "https://randomuser.me/api/portraits/men/58.jpg",
    "email": "daniel.okafor@gmail.com",
    "days_since_contact": 45,
    "status": "overdue",
    "tags": ["close friend", "travel"],
    "bio": "Met at a travel meetup in Lagos. Now we visit each other across continents.",
    "goal": 30,
    "next_due_date": "2026-03-05"
  },
  {
    "id": 8,
    "name": "Priya Sharma",
    "picture": "https://randomuser.me/api/portraits/women/57.jpg",
    "email": "priya.sharma@gmail.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["work", "lunch buddy"],
    "bio": "We share the same lunch break and have solved most of life's problems over biryani.",
    "goal": 7,
    "next_due_date": "2026-04-21"
  },
  {
    "id": 9,
    "name": "Liam O'Brien",
    "picture": "https://randomuser.me/api/portraits/men/91.jpg",
    "email": "liam.obrien@icloud.com",
    "days_since_contact": 22,
    "status": "overdue",
    "tags": ["hobby", "music"],
    "bio": "We played in the same band for three years. Music brought us together.",
    "goal": 14,
    "next_due_date": "2026-04-01"
  },
  {
    "id": 10,
    "name": "Nadia Kowalski",
    "picture": "https://randomuser.me/api/portraits/women/35.jpg",
    "email": "nadia.kowalski@wp.pl",
    "days_since_contact": 11,
    "status": "almost due",
    "tags": ["college", "close friend"],
    "bio": "Exchange student who became one of my best friends. We've visited each other four times.",
    "goal": 14,
    "next_due_date": "2026-04-17"
  }
]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-9/12 mx-auto gap-4 mb-15">
            {friends.map(friend => 
            <div key={friend.id} className="text-center p-5 space-y-2 align-middle shadow-md rounded-lg">
                <Link href={`/friends/${friend.id}`}>
                <Image src={friend.picture} alt="{friend.name}"  width={80} height={80} className="rounded-full mx-auto" loading="eager" priority/>
                <h3 className="text-base md:text-lg font-semibold">{friend.name}</h3>
                <p className="text-[#64748B]"><small>{friend.days_since_contact}d Ago</small></p>
                <div className="uppercase">{friend.tags.map(tag => <span key={tag} className="badge badge-success mr-1">{tag}</span> )}</div>
                <div className={`badge ${getStatusColor(friend.status)} capitalize text-white`}>{friend.status}</div>
                </Link>
            </div>)}
        </div>
    );
};
 
export default FriendsPage;