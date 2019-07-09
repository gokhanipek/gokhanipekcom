import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'webgl-component',
  template: `

  <div #rendererContainer></div>
  `,
})
export class WebglComponent {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;
  directionalLight = null;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  effect = null;
  mouseX = 0;
  mouseY = 0;


  mouse = new THREE.Vector2();
  target = new THREE.Vector2();
  windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {
    this.mouse.x = ( event.clientX - this.windowHalf.x );
    this.mouse.y = ( event.clientY - this.windowHalf.x );
  }

  onMouseWheel( event ) {
    this.camera.position.z += event.deltaY * 0.1; // move camera along z-axis
  }




  constructor(private elementRef:ElementRef) {

    this.elementRef.nativeElement.addEventListener( 'mousemove', this.onDocumentMouseMove, false )
    this.camera = new THREE.PerspectiveCamera( 300, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 800;
    this.camera.position.y = 400;
    this.camera.position.x = 400;


    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.scene = new THREE.Scene();
    var background = new THREE.TextureLoader().load('../../../assets/images/stars.jpg');
    this.scene.background = background;
    var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );// soft white light
    ambientLight.position.z = 1;
    this.scene.add(ambientLight);
    var geometry = new THREE.SphereGeometry( 100, 30,30 );
    var material = new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('../../../assets/images/venus.jpg'),
        });
    this.mesh = new THREE.Mesh(geometry, material );
    this.mesh.position.z = 0;
    this.scene.add(this.mesh);
    this.scene.add(controls)
  }

  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
      this.animate();
  }

  animate() {
      window.requestAnimationFrame(() => this.animate());
      this.mesh.rotation.x += 0.001;
      this.mesh.rotation.y += 0.002;
      this.mesh.rotation.z += 0.002;
      this.renderer.render(this.scene, this.camera);

      this.target.x = ( 1 - this.mouse.x ) * -0.0008;
      this.target.y = ( 1 - this.mouse.y ) * -0.0008;

      this.camera.rotation.x += 0.05 * ( this.target.y - this.camera.rotation.x );
      this.camera.rotation.y += 0.05 * ( this.target.x - this.camera.rotation.y );

      requestAnimationFrame( this.animate );
      this.renderer.render( this.scene, this.camera );

      }


  @HostListener('window:resize')
  onResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.effect.setSize( window.innerWidth, window.innerHeight );
}


  onDocumentMouseMove( event ) {
    this.mouseX = ( event.clientX - this.windowHalfX ) * 10;
    this.mouseY = ( event.clientY - this.windowHalfY ) * 10;
  }


}
