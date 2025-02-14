import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Account</h1>

        {
          user.email ? (
            <p className="text-white mt-2">
              Logged in with email: <span className="font-bold">{user.email}</span>
            </p>
          ) : (
            <p className="text-white mt-2">

              Logged in with given name: <span className="font-bold">{user.given_name}</span>
            </p>
          )
        }

      </div>
    </div>
  )
}

export default Page
