export async function getCount(){
    const res = await fetch('https://agency.teamrabbil.com/api/StatList')
    if(!res.ok){
        throw new Error("Hero List calling Fail")
    }
    return res.json()
}

export async function getWork(){
    const res = await fetch('https://agency.teamrabbil.com/api/WorkList')
    if(!res.ok){
        throw new Error("Work List calling Fail")
    }
    return res.json()
}

export async function getFeatured(){
    const res = await fetch('https://agency.teamrabbil.com/api/FeaturedProject')
    if(!res.ok){
        throw new Error("Featured List calling Fail")
    }
    return res.json()
}

export async function getBrandLogo(){
    const res=await fetch("https://agency.teamrabbil.com/api/BrandList");
    if(!res.ok){
        throw new Error("BrandList Calling Fail");
    }
    return res.json();
}
 
// export function KI(){
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
// }

