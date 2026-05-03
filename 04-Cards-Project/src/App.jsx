import Card from "./components/Card";

const App = () => {
  const job_openings = [
    {
      brand_logo: "https://imgs.search.brave.com/V7sgagRATLlWoAL9kKkWlvM1Lymxxb-2sk6dz3LnYrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn",
      company_name: "Google",
      date_posted: "2 weeks ago",
      post: "Software Engineer, Backend",
      tag: "Full Time",
      tag2: "Junior Level",
      revenue: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
      company_name: "Apple",
      date_posted: "1 week ago",
      post: "iOS Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      revenue: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
      company_name: "Meta",
      date_posted: "3 weeks ago",
      post: "Frontend Engineer (React)",
      tag: "Full Time",
      tag2: "Junior Level",
      revenue: "$50/hr",
      location: "Gurgaon, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
      company_name: "Amazon",
      date_posted: "5 days ago",
      post: "SDE I",
      tag: "Full Time",
      tag2: "Junior Level",
      revenue: "$40/hr",
      location: "Chennai, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/_1M5_bNqziiQwWOv7Lgueyd7ZbiOVadH1oxdEmJlbvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9ibG9nL2Vu/LzIwMTkvMDgvMTkw/ODUwMzEvbmV0Zmxp/eC1zaG9ydC12ZXJz/aW9uLWxvZ28ucG5n",
      company_name: "Netflix",
      date_posted: "4 weeks ago",
      post: "Data Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      revenue: "$95/hr",
      location: "Remote",
    },
    {
      brand_logo: "https://imgs.search.brave.com/kuU7U_OkTSZGmDgj0nN1INoGVKmKcSKkZwHIPB13uos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzcwOS9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
      company_name: "Microsoft",
      date_posted: "10 days ago",
      post: "Cloud Solutions Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      revenue: "$55/hr",
      location: "Noida, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/J4zBI2Ea3BdjC_2oLOOJclhbt8zdjsWG2yFEqhjgKOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9UZXNs/YS1Mb2dvLTEtMTE1/NXg3NzAucG5n",
      company_name: "Tesla",
      date_posted: "6 weeks ago",
      post: "Embedded Systems Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      revenue: "$80/hr",
      location: "Pune, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
      company_name: "Adobe",
      date_posted: "2 weeks ago",
      post: "UI/UX Engineer",
      tag: "Part Time",
      tag2: "Junior Level",
      revenue: "$35/hr",
      location: "Bangalore, India",
    },
    {
      brand_logo: "https://imgs.search.brave.com/2If4MOYAd8_l3oDtTIbHioo8ZmSTvvpaWe45F-woKKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3RfMjI5/X252aWRpYV9sb2dv/LmpwZw",
      company_name: "NVIDIA",
      date_posted: "3 days ago",
      post: "AI/ML Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      revenue: "$100/hr",
      location: "Remote",
    },
    {
      brand_logo: "https://imgs.search.brave.com/jcAkpPPS5iYPU9HLtR58vZ63Gd-x7RCdvg5OyCb7IkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC85NzMtOTczOTgz/NV9zYWxlc2ZvcmNl/LWxvZ28tcG5nLXRh/cmdldGluZy5wbmc",
      company_name: "Salesforce",
      date_posted: "8 days ago",
      post: "Backend Developer (Java)",
      tag: "Full Time",
      tag2: "Junior Level",
      revenue: "$48/hr",
      location: "Hyderabad, India",
    },
  ];
  // console.log(job_openings)

  return (
    <div className="parent">
      {job_openings.map(function(elem, idx) {
        return (
          <div key = {idx}>
            <Card company = {elem.company_name} post = {elem.post} tag1 = {elem.tag} tag2 = {elem.tag2} revenue = {elem.revenue} logo = {elem.brand_logo} date = {elem.date_posted} location = {elem.location}/>
          </div>
        )
      })}
    </div>
  )
};

export default App;
