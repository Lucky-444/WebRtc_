# WebRTC Overview

WebRTC (Web Real-Time Communication) is a technology that enables **peer-to-peer (P2P) communication** between clients for real-time audio, video, and data transfer.

---

## Similarity with WebSocket
Both WebRTC and WebSocket are used for **real-time communication**, but they differ in transport protocol and usage:

| Feature            | WebSocket                | WebRTC                        |
|-------------------|-------------------------|-------------------------------|
| Protocol          | TCP                     | UDP                           |
| Reliability       | Reliable (ensures all data arrives in order) | Unreliable (may lose packets, but faster) |
| Use case          | Chat apps, notifications | Video/audio streaming, file sharing |

> WebRTC prefers **UDP** for faster data transfer, while WebSocket uses **TCP** for reliability.

---

## How WebRTC Works

WebRTC allows clients to connect **directly** to each other, but to do so, they need to know each other's **IP addresses and connection info**. This process is called **signaling**.

### Steps:

1. **Signaling**
   - Clients exchange connection information (IP, port, media info) through a **signaling server**.
   - This is a **one-time setup** to establish the connection.

2. **NAT Traversal**
   - Clients are often behind routers or firewalls (NATs), so a direct connection may not always be possible.
   - **STUN server:** Helps a client discover its public IP address.
   - **TURN server:** Relays data between peers when direct connection is impossible.

3. **Session Description**
   - WebRTC uses **SDP (Session Description Protocol)** to describe media formats, codecs, and network info.
   - Clients exchange SDP via the signaling server to agree on communication parameters.

4. **Peer-to-Peer Connection**
   - After exchanging SDP and **ICE candidates** (possible network paths), a direct P2P connection is established.
   - If a direct connection fails, the **TURN server** relays data between clients.

---

## Summary

- **WebRTC** = Fast, peer-to-peer, real-time communication (UDP-based, may be unreliable).  
- **Signaling server** = Needed for initial exchange of IPs and session info.  
- **STUN/TURN servers** = Handle NATs and relay when direct connection is impossible.  
- **SDP** = Defines session parameters (codecs, addresses, etc.).

---

## References
- [WebRTC Official Documentation](https://webrtc.org/)
- [STUN & TURN Servers](https://tools.ietf.org/html/rfc5389)
- [Session Description Protocol (SDP)](https://tools.ietf.org/html/rfc4566)
## NAT (Network Address Translation)
- **IPv4 and IPv6:** Two types of IP addresses used in networks.  
- To connect to the internet, a device needs a **public IP address**.  
- Most home or office networks use a **router**:
  - Router has a **public IP** assigned by the ISP.  
  - Router assigns **private IPs** to all devices in the local network.  
- **NAT (Network Address Translator):**
  - Runs inside the router.  
  - Converts private IP requests to public IP requests and sends them to the internet.  
  - Maps incoming responses back to the correct device inside the network.

> NAT is important for WebRTC because devices behind NAT do not have public IPs, so **STUN/TURN servers** are used to help peers discover or relay connections.

clients donot have public Ip add instead of Router Has it
Machines connected to the Router dont know Public IP together

we want a direct connection between two clients
Webrtc => P2P This is not a pure P2P connection
why ? 

for connecting Two client via webrtc  we need to first exchange few info b/w the clients
we send something called as SDP (session Desciption Protocol);
SDP packets contains Following
-Description Of multimedia content
-format of Content
-encryption

c1 -> initiates an offer SDP ----------> c2
                                    accepts the offer 
answer SDP<-----------------------------return 
                  Ice Candidates
         ------------------------------>

               Accepts the Offer
         <-------------------------------

                    [signaling server] : Peer Js 
                    who do this connection   
                           
                  The **signaling server does NOT send media**  
                  It only helps clients **find each other**
                  once the connection wset up we dont need signaling server further


## Ice Candidates
all the details of about the available method to commoniucation
TURN or STUN 


## STUN server
session Traversal Utility for nat
it allows client machine to finodut there Public Ip

There can be 5% cases due to firewalll or something a direct communictaion b/w client is not possible 
         we need one more intermediate layer to relay the information
## TURN SERVER
Traversal using Relay Nat
Use case : bypass these Kind of securities(firewalls , ..);




---

## STUN Server
**STUN = Session Traversal Utilities for NAT**

### Purpose:
- Helps a client discover its **public IP address**
- Required because clients are behind NAT

Example:
> “Hey STUN server, what does my IP look like from the internet?”

STUN works in **most cases (~95%)**

---

## TURN Server
**TURN = Traversal Using Relay NAT**

### Why TURN is needed?
In some cases:
- Strict firewalls
- Corporate networks
- Symmetric NATs

👉 Direct communication is **not possible**

### What TURN does:
- Acts as a **relay**
- All data passes through TURN server

⚠️ Slower and more expensive, but reliable

---

## Complete WebRTC Flow

1. Clients connect to **Signaling Server**
2. Exchange **SDP Offer & Answer**
3. Exchange **ICE Candidates**
4. Use **STUN** to discover public IP
5. Try direct P2P connection
6. If fails ➜ fallback to **TURN**
7. Once connected ➜ signaling server is removed

---

## Key Takeaways

- Clients do NOT have public IPs
- Router owns the public IP
- WebRTC needs signaling → not pure P2P
- SDP defines **how** to communicate
- ICE finds **where** to communicate
- STUN discovers public IP
- TURN relays data when direct connection fails

---

## Final Note

WebRTC focuses on:
- **Speed over reliability**
- Uses **UDP**
- Small data loss is acceptable (video/audio)

That’s why it is perfect for:
- Video calls
- Voice calls
- Screen sharing
- Real-time collaboration


/**Group Call**/
One is Mesh Topology
SFU -> single forwarding Unit
all the clients there not going to directly communicate with each other
they stream the information to the central server 
and central server send back to the clients


we are going to use our node server as SFU 

