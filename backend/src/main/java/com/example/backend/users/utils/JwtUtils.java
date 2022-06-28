//package com.example.backend.users.utils;
//
//import com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm;
//import com.sun.org.apache.xpath.internal.operations.Bool;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//public class JwtUtils {
//
//    private  static final String SECRET_KEY = "SECRET";
//
//    public String generateToken(UserDetails userDetails) {
//        Map<String, Object> claims = new HashMap<>();
//        return  createToken(claims, userDetails.getUsername());
//  }
//    public Boolean validateToken(String token, UserDetails userDetails) {
//        String userName = extractUsername(token);
//        return userName.equals(userDetails.getUsername()) && !isTokenExpired(token);
//    }
//
//
//    private String createToken(Map<String, Object> claims, String subject) {
//        Date now = new Date(System.currentTimeMillis());
//        Date until = new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10);
//        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(now).setExpiration(until)
//                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//    }
//
//    public  <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//        final Claims claims = extractALlClaims(token);
//        return claimsResolver.apply(claims);
//    }
//
//    private Claims extractALlClaims(String token) {
//        return Jwts.parser().setSignKey(SECRET_KEY).parseClaimsJws(token).getBody();
//    }
//
//    public String extractUsername(String token) {
//        return extractClaim(token, Claims::getSubject);
//    }
//
//    public Date extractExpiration(String token) {
//        return extractClaim(token, Claims::getExpiration);
//    }
//
//    private Boolean isTokenExpired(String token) {
//        return extractExpiration(token).before(new.Date());
//    }
//}
