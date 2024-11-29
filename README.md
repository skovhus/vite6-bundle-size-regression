### vite6-bundle-size-regression

When using the prosemirror-utils dependency the vite6 bundle ends up 20% bigger than vite5 – due to ESM
and CJS ending up in the same bundle (see stats-vite5.html and stats-vite6.html).

Removing the prosemirror-utils dependency fixes the problem. 

Question is, can this be concidered a vite 6 bundle size regression?
