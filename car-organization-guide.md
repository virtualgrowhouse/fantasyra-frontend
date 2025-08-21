# Car Image Database Organization Guide

## Overview
This system organizes car images with imgbb URLs in a structured format that supports multiple images per car and future 3D model integration.

## File Structure

```
car-image-database.json         # Main database file
cars/                          # Future folder structure
├── {car_id}/                 # Unique identifier for each car
│   ├── images/              # All images for this car
│   │   ├── standard/       # Front, rear, side views
│   │   ├── interior/       # Dashboard, seats, cabin
│   │   ├── details/        # Wheels, engine, badges
│   │   └── action/         # Track, street, motion shots
│   ├── models/             # 3D model files
│   │   └── car_model.glb   # GLB format 3D model
│   └── metadata.json       # Car-specific metadata
```

## Image Categories

### Standard Views (Required)
- `front` - Front view of the car
- `rear` - Rear view of the car  
- `side_left` - Left side profile
- `side_right` - Right side profile
- `three_quarter_front` - Angled front view
- `three_quarter_rear` - Angled rear view

### Interior Views (Optional)
- `interior` - General interior view
- `dashboard` - Dashboard and instrument cluster
- `seats` - Front and rear seats
- `steering_wheel` - Steering wheel close-up

### Detail Shots (Optional)
- `detail_wheels` - Wheel and tire details
- `detail_engine` - Engine bay
- `detail_headlights` - Headlight design
- `detail_taillights` - Taillight design
- `detail_grille` - Front grille
- `detail_badges` - Brand badges and emblems

### Action Shots (Optional)
- `action_track` - Car on racing track
- `action_street` - Car on public road
- `action_drift` - Drifting or cornering
- `action_launch` - Acceleration/launch

## Adding New Cars

### Step 1: Upload Images to ImgBB
1. Visit [imgbb.com](https://imgbb.com)
2. Upload your car images
3. Copy the direct image URLs
4. Organize URLs by category

### Step 2: Create Car Entry
1. Open `car-image-database.json`
2. Create unique car ID: `brand_model_variant_number`
   - Example: `mclaren_p1_hybrid_001`
3. Add car object with all details

### Step 3: Image URL Format
```json
"images": {
  "front": {
    "url": "https://i.ibb.co/[your_imgbb_id]/front.jpg",
    "description": "Front view description"
  }
}
```

## Car ID Naming Convention

Format: `{brand}_{model}_{variant}_{number}`

Examples:
- `ferrari_488_gtb_001`
- `lamborghini_huracan_evo_001` 
- `porsche_911_gt3_001`
- `mclaren_720s_spider_001`
- `bugatti_chiron_sport_001`

## 3D Model Integration

When adding 3D models later:
1. Save GLB files in `cars/{car_id}/models/` folder
2. Update the `model_3d.file` field in JSON
3. Ensure models are optimized for web display

```json
"model_3d": {
  "file": "cars/mclaren_p1_001/models/car_model.glb",
  "description": "High-detail 3D model"
}
```

## Image Requirements

### Technical Specs
- **Format**: JPG, PNG, WebP
- **Resolution**: Minimum 1920x1080, prefer 4K for main views
- **Aspect Ratio**: 16:9 or 4:3 recommended
- **File Size**: Under 5MB per image for web optimization

### Photography Guidelines
- **Lighting**: Even, natural lighting preferred
- **Background**: Clean, minimal backgrounds
- **Angles**: Consistent angles across similar car types
- **Quality**: Sharp focus, minimal motion blur

## Usage in Game System

This database will integrate with:
- **Community Gallery**: Display car collections
- **Upload System**: Reference for user-uploaded cars
- **3D Viewer**: Link images with 3D models
- **Marketplace**: Visual catalog for car trading
- **Customization**: Before/after modification galleries

## Future Enhancements

- **Auto-tagging**: AI-powered image categorization
- **Quality scoring**: Automatic image quality assessment
- **Batch upload**: Multiple car upload interface
- **Version control**: Track image updates and changes
- **Search system**: Advanced filtering by brand, year, category