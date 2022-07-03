const comutl = mofron.util.common;

/**
 * @file mofron-effect-per2rem/index.js
 * @brief component size setter to convert from % to rem
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) type: size type (width,height)
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("Per2Rem");
            this.shortForm("type", "size");
            
            this.confmng().add('type', { type: 'string', select: ['width', 'height'], init: 'width' });
            this.confmng().add('size', { type: 'size' });
            this.confmng().add('offset', { type: 'size', init: '0rem' });

            /* init config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
            let rem_size  = null;
	    if ('width' === this.type()) {
	        rem_size = (window.innerWidth * (parseInt(this.size())/100)) / 100;
		cmp.width(
		    comutl.sizesum(rem_size+'rem', this.offset())
		);
            } else {
	        rem_size = (window.innerHeight * (parseInt(this.size())/100)) / 100;
		cmp.height(
		    comutl.sizesum(rem_size + 'rem', this.offset())
		);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    type (prm) {
        try {
            return this.confmng('type', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    size (prm) {
        try {
            return this.confmng('size', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    offset (prm) {
        try {
            return this.confmng('offset', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
