WebRtc -> 
It is a Peer - peer Connection 
Simillarity Btw Websocket and WebRtc => both of are used for Real time connection 
Websocekt Based On TCP-> becoz they want Reliable data 
WebRtce Based On UDP -> becoz thay want Faster data Transfer

//In WebRtc Things Are Going to be unreliable 


If webRtc helps clients to direct connect then how it actually works
The process is called as signaling
let there two clients c1  & c2 
//Important Thing is IP address of the client 
//how my client know the Ip add. of the other
for both the client to actually know each other we need to setup a mechanism one time mechanism (our own server)

Ice Server or Turn Server or Stun Server     
A turn server in webrtc is used to relay data between peers
when a direct connection is not possible at that time we need this

They Use SDP(session description Protocol) 


