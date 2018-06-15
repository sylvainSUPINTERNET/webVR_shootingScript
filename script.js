      AFRAME.registerComponent('missile', {
            schema: {
                speed: {type: 'float', default: 0.1}, // Décalage sur l'axe (step)
                rx: {type: 'float'}, //Angle x de l'axe à suivre (rotation.x)
                ry: {type: 'float'}, //Angle y de l'axe à suivre (rotation.y)
                rz: {type: 'float'}, //Angle z de l'axe à suivre (rotation.z)
            },
            
            tick: function () {
                var currentPos = this.el.getAttribute('position'); //Position actuel de l'objet a déplacer
                this.el.setAttribute('position', {
                    x: currentPos.x + this.data.speed * Math.sin((this.data.ry - 180) * Math.PI / 180.0), //Nouvelle valeur pour la position x
                    y: currentPos.y + this.data.speed * Math.tan((this.data.rx - 180) * (Math.PI / 180)), //Nouvelle valeur pour la postion y
                    z: currentPos.z + this.data.speed * Math.cos((this.data.ry -180) * Math.PI / 180.0), //Nouvelle valeur pour la postion z
                });
            }
        });
