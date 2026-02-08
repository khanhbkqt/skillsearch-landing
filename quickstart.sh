#!/bin/bash

# OpenClaw Skill Search Landing Page - Quick Start Script

set -e

echo "🚀 OpenClaw Skill Search Landing Page - Quick Start"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check Node.js
if ! command_exists node; then
    echo "❌ Error: Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18+ is required. You have Node.js $NODE_VERSION."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check npm
if ! command_exists npm; then
    echo "❌ Error: npm is not installed."
    exit 1
fi

echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
else
    echo "✅ Dependencies already installed"
    echo ""
fi

# Parse command line arguments
COMMAND=${1:-dev}

case $COMMAND in
    dev)
        echo "🔥 Starting development server..."
        echo "   Open http://localhost:3000 in your browser"
        echo ""
        npm run dev
        ;;
    
    build)
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "✅ Build complete! Run './quickstart.sh start' to test production build."
        ;;
    
    start)
        echo "🚀 Starting production server..."
        if [ ! -d ".next" ]; then
            echo "❌ Error: Production build not found. Run './quickstart.sh build' first."
            exit 1
        fi
        echo "   Open http://localhost:3000 in your browser"
        echo ""
        npm start
        ;;
    
    deploy)
        echo "🌐 Deploying to Vercel..."
        if ! command_exists vercel; then
            echo "⚠️  Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        vercel --prod
        ;;
    
    preview)
        echo "👀 Creating preview deployment..."
        if ! command_exists vercel; then
            echo "⚠️  Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        vercel
        ;;
    
    lint)
        echo "🔍 Running linter..."
        npm run lint
        ;;
    
    clean)
        echo "🧹 Cleaning build artifacts..."
        rm -rf .next
        rm -rf out
        rm -rf node_modules/.cache
        echo "✅ Clean complete!"
        ;;
    
    reset)
        echo "🔄 Resetting project (removing node_modules and build artifacts)..."
        rm -rf .next
        rm -rf out
        rm -rf node_modules
        echo "✅ Reset complete! Run './quickstart.sh dev' to reinstall and start."
        ;;
    
    help|*)
        echo "Usage: ./quickstart.sh [command]"
        echo ""
        echo "Commands:"
        echo "  dev      Start development server (default)"
        echo "  build    Build for production"
        echo "  start    Start production server (requires build first)"
        echo "  deploy   Deploy to Vercel production"
        echo "  preview  Deploy preview to Vercel"
        echo "  lint     Run ESLint"
        echo "  clean    Remove build artifacts"
        echo "  reset    Remove node_modules and build artifacts"
        echo "  help     Show this help message"
        echo ""
        echo "Examples:"
        echo "  ./quickstart.sh dev          # Start development"
        echo "  ./quickstart.sh build        # Build for production"
        echo "  ./quickstart.sh deploy       # Deploy to production"
        ;;
esac
