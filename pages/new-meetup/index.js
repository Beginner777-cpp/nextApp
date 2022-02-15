import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetup;
