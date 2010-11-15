/**
* lazyQuery - the real library can get here when it feels like it
*
* @fileOverview  Gives user just what they need until main jQuery library arrives
* @author        Dan Beam <dan@danbeam.org>
*
* Copyright (c) 2010 Dan Beam
* Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

(function (g) {

    var q = [],

        j = function () {
            for (var i = 0, a = arguments, l = a.length; i < l; ++i) {
                if ('function' === typeof a[i]) {
                    q.push(a[i]);
                }
            }
            return j;
        },

        p = function () {
                var s, b = g.document && g.document.getElementsByTagName && (g.document.getElementsByTagName('body') || g.document.getElementsByTagName('head'));
                if (!b) {
                    g.setTimeout(p, 0);
                    return;
                }
                s = g.document.createElement('script');
                s.setAttribute('type', 'text/javascript');
                s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js');
                b[0].appendChild(s);
                s.loaded = false;
                s.onreadystatechange = s.onload = function () {
                    if (!s.loaded) {
                        while (q.length > 0) {
                            q.pop()();
                        }
                        s.loaded = true;
                    }
                };
            };

    // start polling on when synchronous scripts stop
    g.setTimeout(p, 0);

    // create $(document).ready alias
    j.ready = j;

    // set to global
    g.$ = g.jQuery = j;

}(this));