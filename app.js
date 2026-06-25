const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jenkins CI/CD Pipeline</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    overflow:hidden;
    background:linear-gradient(135deg,#0f172a,#111827,#1e293b);
    color:white;
}

canvas{
    position:fixed;
    top:0;
    left:0;
    z-index:1;
}

.content{
    position:relative;
    z-index:10;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
}

h1{
    font-size:4rem;
    font-weight:700;
    background:linear-gradient(90deg,#60a5fa,#06b6d4,#8b5cf6);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:float 3s ease-in-out infinite;
}

p{
    font-size:1.2rem;
    max-width:700px;
    margin-top:20px;
    color:#d1d5db;
}

.buttons{
    margin-top:40px;
    display:flex;
    gap:20px;
    flex-wrap:wrap;
}

.btn{
    padding:14px 28px;
    border:none;
    border-radius:50px;
    cursor:pointer;
    font-size:1rem;
    font-weight:600;
    transition:.4s;
}

.primary{
    background:#06b6d4;
    color:white;
}

.primary:hover{
    transform:translateY(-5px);
    box-shadow:0 10px 25px rgba(6,182,212,.5);
}

.secondary{
    background:rgba(255,255,255,.1);
    backdrop-filter:blur(10px);
    color:white;
    border:1px solid rgba(255,255,255,.2);
}

.secondary:hover{
    transform:translateY(-5px);
}

.card{
    position:absolute;
    bottom:40px;
    right:40px;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(20px);
    border:1px solid rgba(255,255,255,.1);
    padding:20px;
    border-radius:20px;
    z-index:10;
}

.card h3{
    color:#22d3ee;
}

@keyframes float{
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-10px);}
}
</style>
</head>

<body>

<div class="content">
    <h1>🚀 Jenkins CI/CD Pipeline</h1>

    <p>
        Modern DevOps Workflow powered by GitHub, Jenkins, Docker,
        Docker Hub and Automated Deployment.
    </p>

    <div class="buttons">
        <button class="btn primary">Deploy Now</button>
        <button class="btn secondary">View Pipeline</button>
    </div>
</div>

<div class="card">
    <h3>DevOps Stack</h3>
    <p>GitHub → Jenkins → Docker → Docker Hub → Deployment</p>
</div>

<script type="module">

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff,2);
scene.add(ambient);

const pointLight = new THREE.PointLight(0x00ffff,10);
pointLight.position.set(5,5,5);
scene.add(pointLight);

// Cartoon Robot Head
const head = new THREE.Mesh(
new THREE.SphereGeometry(1.2,32,32),
new THREE.MeshStandardMaterial({
color:0x00d4ff,
roughness:0.3,
metalness:0.8
})
);

scene.add(head);

// Eyes
const eyeGeo = new THREE.SphereGeometry(0.15,16,16);

const eyeMat = new THREE.MeshStandardMaterial({
color:0xffffff
});

const eye1 = new THREE.Mesh(eyeGeo,eyeMat);
eye1.position.set(-0.4,0.2,1);

const eye2 = new THREE.Mesh(eyeGeo,eyeMat);
eye2.position.set(0.4,0.2,1);

scene.add(eye1);
scene.add(eye2);

// Jenkins Helmet
const helmet = new THREE.Mesh(
new THREE.TorusGeometry(1.4,0.15,16,100),
new THREE.MeshStandardMaterial({
color:0x8b5cf6
})
);

helmet.rotation.x = Math.PI/2;
scene.add(helmet);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

head.rotation.y += 0.01;
helmet.rotation.z += 0.01;

head.position.y = Math.sin(Date.now()*0.002)*0.2;
helmet.position.y = head.position.y;

eye1.position.y = head.position.y + 0.2;
eye2.position.y = head.position.y + 0.2;

renderer.render(scene,camera);

}

animate();

window.addEventListener('resize',()=>{

camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});

</script>

</body>
</html>
`);
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});