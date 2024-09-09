import { doLogout } from "@/actions/index"

const Logout = () => {
  return (
    <form action={doLogout}>
        <button type="submit" className="text-left w-full">
          Logout
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
          </svg> */}
          
        </button>
    </form>
  )
}

export default Logout