// listen for the submit button
document.querySelector('#valentinesForm').addEventListener('submit', valentinesMessage);

function valentinesMessage(e) {
 let message = document.querySelector('#message');
 let random = Math.floor(Math.random()* 101);
 console.log(message.innerHTML = String.fromCodePoint(0x1F37B));
 switch (random){
  case 0:
     message.value = `1. Because you make me laugh ${String.fromCodePoint(0x1F923)}`
     break;
  case 1:
    message.value = '2. Your an amazing planner'
    break;
  case 2:
    message.value = '3. lol epitome'
    break;
  case 3:
    message.value = '4. Your crazy good at coming up with gifts'
    break;
  case 4:
    message.value = '5. Articulates & thinks about the big picture'
    break;
  case 5:
    message.value = "6. I feel like you'd be a great mom"
    break;
  case 6:
    message.value = '7. You can be a crazy good cook sometimes'
    break;
  case 7:
    message.value = `8. Your not afraid to booze ${String.fromCodePoint(0x1F37B)}`
    break;
  case 8:
    message.value = `9. ${String.fromCodePoint(0x1F525)}${String.fromCodePoint(0x1f3C0)} enough said`
    break;
  case 9:
    message.value = "10. You consistenly get on my nerves lol"
    break;
  case 10:
    message.value = '11. You pay hella attention to detail'
    break;
  case 11:
    message.value = `12. ${String.fromCodePoint(0x1F924)} ${String.fromCodePoint(0x1F351)} `
    break;
  case 12:
    message.value = `13. I ${String.fromCodePoint(0x1F9E1)} your fam `
    break;
  case 13:
    message.value = `14. Your a real one! ${String.fromCodePoint(0x1F4AF)} ${String.fromCodePoint(0x1F6AB)} ${String.fromCodePoint(0x1F9E2)} `
    break;
  case 14:
    message.value = `15. You brought me Super Smash Bros`
    break;
  case 15:
    message.value = `16. You were there when my granny died`
    break;
  case 16:
    message.value = `17. You take care of me when im ${String.fromCodePoint(0x1F912)} ${String.fromCodePoint(0x1F915)}`
    break;
  case 17:
    message.value = `18. You got that YUMMY YUMMY YUMMY`
    break;
  case 18:
    message.value = `19. You try to make me my best me`
    break;
  case 19:
    message.value = `20. You always have good intentions`
    break;
  case 20:
    message.value = `21. You got me a freaking ${String.fromCodePoint(0x1F3B8)}`
    break;
  case 21:
    message.value = `22. It's dope you have aspirations`
    break;
  case 22:
    message.value = `23. Your short`
    break;
  case 23:
    message.value = `24. Your cuddle game is A1`
    break;
  case 24:
    message.value = `25. You can be mad fun`
    break;
  case 25:
    message.value = `26. Your ok with just chilling`
    break;
  case 26:
    message.value = `27. You give off a great vibe`
    break;
  case 27:
    message.value = `28. My family loves you`
    break;
  case 28:
    message.value = `29. Your a competitor`
    break;
  case 29:
    message.value = `30. Your beautiful ${String.fromCodePoint(0x1F60D)}${String.fromCodePoint(0x1F60D)}${String.fromCodePoint(0x1F60D)}`
    break;
  case 30:
    message.value = `31. Your hairs always on fleek`
    break;
  case 31:
    message.value = `32. Super loyal`
    break;
  case 32:
    message.value = `33. Your my fav ${String.fromCodePoint(0x1F422)}`
    break;
  case 33:
    message.value = `34. Your drive is crazy`
    break;
  case 34:
    message.value = `35. You try and protect me`
    break;
  case 35:
    message.value = `36. you limit my recklesSness`
    break;
  case 36:
    message.value = `37. Good advice, you give`
    break;
  case 37:
    message.value = `38. YOU LOVE ${String.fromCodePoint(0x1F363)}!`
    break;
  case 38:
    message.value = `39. Your not afraid to travel`
    break;
  case 39:
    message.value = `40. Your not always serious`
    break;
  case 40:
    message.value = `41. You can be serious when needed`
    break;
  case 41:
    message.value = `42. You can be mad goofy`
    break;
  case 42:
    message.value = `43. I can be myself around U`
    break;
  case 43:
    message.value = `44. Your the Bonnie to my Clyde`
    break;
  case 44:
    message.value = `45. your the PB to my Jellytime`
    break;
  case 45:
    message.value = `46. Your my biggest fan`
    break;
  case 46:
    message.value = `47. We make a good team`
    break;
  case 47:
    message.value = `48. You brighten my ${String.fromCodePoint(0x1F30D)}`
    break;
  case 48:
    message.value = `49. Your super creative`
    break;
  case 49:
    message.value = `50. You love me`
    break;
  case 50:
    message.value = `51. Girls chef game crazy`
    break;
  case 51:
    message.value = `52. Your not always soft`
    break;
  case 52:
    message.value = `52. we can joke around`
    break;
  case 53:
    message.value = `53. Your always there for me`
    break;
  case 54:
    message.value = `54. Your a try hard`
    break;
  case 55:
    message.value = `55. Your into anime`
    break;
  case 56:
    message.value = `56. Your not a serial killer`
    break;
  case 57:
    message.value = `57. You tell me how it is`
    break;
  case 58:
    message.value = `58. its cute your afraid of bugs`
    break;
  case 59:
    message.value = `59. Your independent`
    break;
  case 60:
    message.value = `60.  U ${String.fromCodePoint(0x1F440)} great in bikinis`
    break;
  case 61:
    message.value = `61. You pitty the fool`
    break;
  case 62:
    message.value = `62. Not afraid to yell at peeps`
    break;
  case 63:
    message.value = `63, Very honorable person`
    break;
  case 64:
    message.value = `64. You give great hugs`
    break;
  case 65:
    message.value = `65.Your a fan of Sailor Moon`
    break;
  case 66:
    message.value = `66. Your tats are cool ${String.fromCodePoint(0x1F60E)}`
    break;
  case 67:
    message.value = `67. Your great to talk too `
    break;
  case 68:
    message.value = `68. I wake up thinking of U`
    break;
  case 69:
    message.value = `69. Your unique asf`
    break;
  case 70:
    message.value = `70. Your very strong willed`
    break;
  case 71:
    message.value = `71. lol ${String.fromCodePoint(0x1F4A3)} ${String.fromCodePoint(0x1F431)}`
    break;
  case 72:
    message.value = `72. You have that warrior spirit ${String.fromCodePoint(0x1F47A)}`
    break;
  case 73:
    message.value = `73.You wouldn't gone girl me`
    break;
  case 74:
    message.value = `74. Not too boring lol`
    break;
  case 75:
    message.value = `75. very hard to trick`
    break;
  case 76:
    message.value = `76. Child friendly`
    break;
  case 77:
    message.value = `77. Parent friendly`
    break;
  case 78:
    message.value = `78. Down with Diddling`
    break;
  case 79:
    message.value = `79. COPACETIC`
    break;
  case 81:
    message.value = `80. ${String.fromCodePoint(0x1F410)} at tetris`
    break;
  case 82:
    message.value = `81. My medium dark skinned goddess`
    break;
  case 83:
    message.value = `82. Your fun to drink with`
    break;
  case 84:
    message.value = `83. Stands up for beliefs`
    break;
  case 85:
    message.value = `84. Good diver`
    break;
  case 86:
    message.value = `85. Pretty Artistic`
    break;
  case 87:
    message.value = `86. Go hard in the Paint`
    break;
  case 88:
    message.value = `87. Decent at Mario Kart`
    break;
  case 89:
    message.value = `88. Great mom friend`
    break;
  case 90:
    message.value = `89. Gives off mad mom vibes`
    break;
  case 91:
    message.value = `90. Can be goofy as hell`
    break;
  case 92:
    message.value = `91. Tries to understand me`
    break;
  case 93:
    message.value = `92. Can be needy`
    break;
  case 94:
    message.value = `93. Can be mad sensitive ${String.fromCodePoint(0x1F633)}`
    break;
  case 95:
    message.value = `94. Not a thotty thot thot`
    break;
  case 96:
    message.value = `95. Can carry the team`
    break;
  case 97:
    message.value = `96. Has big boobs`
    break;
  case 98:
    message.value = `97. sacrifices for me`
    break;
  case 99:
    message.value = `98. Puts me first`
    break;
  case 100:
    message.value = `99. Stays suprising me`
    break;
  case 101:
    message.value = `100. You make it clear your mine ${String.fromCodePoint(0x1F512)}`
    break;
  
  
  
  default:
    message.value = `100. You make it clear your mine ${String.fromCodePoint(0x1F512)}`
  
  
 }
 

 e.preventDefault()
}



// case 0:
//     message.value = `TEST`
//     break;
//   case 0:
//     message.value = `TEST`
//     break;
//   case 0:
//     message.value = `TEST`
//     break;
//   case 0:
//     message.value = `TEST`
//     break;
//   case 0:
//     message.value = `TEST`
//     break;