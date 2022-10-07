¡Agarra(me)!

#Description

Agarra(me) es un juego en el que el jugador tiene que mover al muñeco de lado a lado e intentar coger todos los objetos que caen posibles. Cada objeto tiene una puntuación, si coges a Shan Yu morirás y te llevará a la pantalla de gameover, donde podrás volver a jugar o ir al inicio del juego.
El juego termina cuando chocas con Shan Yu.
Al finalizar el juego, te dirá tu record para que puedas ir superándote poco a poco.


#MVP (DOM-CANVAS)

-el juego tiene un personaje ("Mushu")
-de la parte superior caerán objetos.
-los objetos te caen de forma aleatoria desde la parte superior de la pantalla.
-cada objeto tiene una distinta puntuación.
-cuando coges la espada, Mushu crece, cuando coges al grillo, mushu vuelve a su tamaño y cambia el fondo del juego.
-si coges a Mulán el fondo va cambiando de forma aleatoria.
-te marca el score en la parte superior.
-finaliza el juego cuando colisionas con Shan Yu.
-te muestra el score conseguido en la pantalla de gameOver.

#BACKLOG

-añadir dificultad al juego.
-guardar el score para próximas partidas.
-unificar código repetido.

#DATA STRUCTURE

principal.js

*class()

#game.js

*constructor()
*gameOver()
*gameScore()
*lookScore()
*mushuColission()
*repeat()
*drawFondo()
*drawScore()
*gameLoop()

#mushu.js

*constructor (img,tamaño,velocidad,movimiento)
*drawMushu()
*movimientoMushuIzq()
*movimientoMushuDcha()

#frutas.js
*class Manzana (constructor, img, random,posición,medidas,velocidad,movimiento)
*drawManzana()
*movimientoAplle()
*class Espada (constructor, img, random,posición,medidas,velocidad,movimiento)
*drawEspada()
*movimientoEspada()
*class Grillo (constructor, img, random,posición,medidas,velocidad,movimiento)
*drawGrillo
*movimientoGrillo
*class Mulan (constructor, img, random,posición,medidas,velocidad,movimiento)+
*drawMulan
*movimientoMulan()
*class ShanYu (constructor, img, random,posición,medidas,velocidad,movimiento)
*drawSanYu
*movimientoShanYu


#States y States Transitions
*pantalla de bienvenida al juego.
*pantalla del juego.
*pantalla gameover, con posibilidad de volver a la pantalla del juego o a la bienvenida del juego.


#Task
*pantalla-inicio
*canvas
*pantalla-gameOver
*startGame()
*score
*bucle inicio
*dibujar canvas
*actualizar canvas
*imagen canvas
*sonido canvas
*mover mushu
*dibujar mushu
*objetos
*dibujar objetos
*mover objetos random
*espada mushu crece
*grillo mushu vuelve a tamaño
*mushu-mulan fondo canvas cambia
*muchu-grillo fondo canvas cambia
*comprobar colisiones
*gameOver
*imagen gameOver
*sonido gameOVer
*addEventListener


#Links

#Trello
https://trello.com/b/8gy9Phd6/proyecto-1-tiempo-de-cosecha

#Git
https://raquel2292.github.io/Agarra-me-/

#Slides
https://docs.google.com/presentation/d/1LZ9rs1B56QFlZiaD2-_DDnj4z3GEwAV4DF1TaB1yIgY/edit#slide=id.g1629fa9cc90_0_10