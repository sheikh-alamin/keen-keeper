import Image from "next/image"
import { FaArchive, FaBell, FaPhone, FaPhoneAlt, FaPhoneVolume, FaTrash, FaViadeo, FaVideo } from "react-icons/fa"
import { FaDeleteLeft, FaMessage } from "react-icons/fa6"
import CheckInButtons from "./CheckInButtons"

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

const getStatusColor = (status) => {
        switch (status) {
            case "overdue" : return "badge-error"
            case "almost due" : return "badge-warning"
            case "on-track" : return "badge-success"
            default : return "badge-primary"
        }
    }

const FriendDetailsPage = async ({params}) => {
    const {friendsId} = await params;
    const friend = friends.find(friend => friend.id === parseInt(friendsId))
    // console.log(friend)
    return (
        <div className="grid grid-cols-3 gap-4 max-w-9/12 my-20 mx-auto">
            <div>
                <div className="shadow-md rounded-lg p-6 flex flex-col justify-center items-center text-center space-y-2">
                    <Image src={friend.picture} alt="{friend.name}"  width={80} height={80} className="rounded-full mx-auto" />
                    <h1 className="text-5 font-semibold">{friend.name}</h1>
                    <div className={`badge ${getStatusColor(friend.status)} capitalize text-white`}>{friend.status}</div>
                    <div className="uppercase">{friend.tags.map(tag => <span key={tag} className="badge badge-success mr-1">{tag}</span> )}</div>
                    <p className="italic">&quot;{friend.bio}&quot;</p>
                    <p className="font-semibold">Preffered Email:</p>
                    {friend.email}
                </div>
                <button className="flex cursor-pointer w-full items-center text-center justify-center p-5 shadow-md rounded-lg gap-3 font-semibold"> <FaBell></FaBell> <h1>Snooze 2 weeks</h1></button>
                <button className="flex cursor-pointer w-full items-center text-center justify-center p-5 shadow-md rounded-lg gap-3 font-semibold"> <FaArchive></FaArchive> <h1>Archive</h1></button>
                <button className="flex cursor-pointer w-full items-center text-center text-red-600 justify-center p-5 shadow-md rounded-lg gap-3 font-semibold"> <FaTrash/><h1>Delete</h1></button>
            </div>
            {friend && 
            <div className="col-span-2">
                <div className="grid grid-cols-3 mx-auto gap-4">
                    <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                        <h3 className="font-bold text-8 text-[#244D3f]">{friend.days_since_contact}</h3>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                        <h3 className="font-bold text-8 text-[#244D3f]">{friend.goal}</h3>
                        <p>Goal(Days)</p>
                    </div>
                    <div className="text-center py-4 space-y-3 align-middle shadow-md rounded-lg">
                        <h3 className="font-bold text-8 text-[#244D3f]">{friend.next_due_date}</h3>
                        <p>Next Due</p>
                    </div>
                </div>
                <div className=" p-5 shadow-md mt-5 rounded-lg align-middle">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">Relationship Goal</h3>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <h3>Connect every 30 days</h3>
                </div>
                {/* <div className=" p-5 shadow-md mt-5 rounded-lg align-middle">
                    <h3 className="font-semibold">Quick Check-In</h3>
                    <div className="grid grid-cols-3 my-4 gap-4">
                        <button className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 align-middle bg-gray-100 p-3 rounded-lg">
                            <FaPhoneAlt />
                            <h1>Call</h1>
                        </button>
                        <button className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 align-middle bg-gray-100  p-3 rounded-lg">
                            <FaMessage />
                            <h1>Text</h1>
                        </button>
                        <button className="text-center cursor-pointer text-lg flex flex-col items-center justify-center space-y-3 align-middle bg-gray-100  p-3 rounded-lg">
                            <FaVideo />
                            <h1>Video</h1>
                        </button>
                    </div>
                </div> */}
                <CheckInButtons friendName={friend.name} />
            </div> }
        </div>
    );
};

export default FriendDetailsPage;