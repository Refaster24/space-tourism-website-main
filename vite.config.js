import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'


const root = resolve(__dirname,'src')

const outDir = resolve(__dirname,'dist')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main : resolve(__dirname,'index.html'),
        crew : resolve(__dirname,'crew.html'),
        destination : resolve(__dirname,'destination.html'),
        technology : resolve(__dirname,'technology.html')
      }
    }
  }
})
