import { useState } from "react"



const Github = () => {
    const [searchInput, setSearchInput] = useState("")
    const [userData, setUserData] = useState([])

    const handleSearch = async () =>{
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${searchInput}`)
            if(response.ok){
                const data = await response.json()
                setUserData(data.items)
            }else{
                console.error('GitHub API request failed')
                setUserData([])
            }
        } catch (error){
            console.error('Error during GitHub API request', error)
            setUserData([])
        }
    }
  return (
    <div className="github-container">
      <h1>Github User Search</h1>
      <div className="search-input-container">
      <input
      type="text"
      placeholder="Github username or email"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)} className="search-input"/>
      <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {userData.length > 0 && (
        <div className="user-data-container">
            {userData.map((user) => (
                <div key={crypto.randomUUID()} className="user-card">
                <h2>{user.login}</h2>
                <img src={user.avatar_url} alt="User Avatar" className="user-avatar"/>
                <p><a href={user.html_url} >{user.html_url}</a></p>
                </div>
            ))}
         </div>
      )}
    </div>
  )
}
export default Github