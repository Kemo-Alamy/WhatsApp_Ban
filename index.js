<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="theme-color" content="#f89e1b">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <title>Kemo Store | شحن ألعاب</title>

    <!-- ================= بداية أكواد SEO وأيقونات الموقع المخصصة لمحرك بحث جوجل ================= -->
    <meta name="description" content="متجر كيمو ستور (Kemo Store) الأفضل والأسرع لشحن جميع الألعاب بأرخص الأسعار وبطرق دفع آمنة. تسليم فوري.">
    <meta name="keywords" content="شحن العاب, شحن ببجي, شحن فري فاير, متجر شحن العاب, Kemo Store, كيمو ستور">
    <meta name="author" content="Kemo Store">
    <meta name="robots" content="index, follow"> 
    
    <!-- تعريف اسم الموقع صراحة لجوجل -->
    <meta property="og:site_name" content="Kemo Store">
    
    <!-- مسارات الأيقونة بالروابط الكاملة لضمان التقاط جوجل لها -->
    <link rel="icon" href="https://kemo-alamy.github.io/Kemo-Store-/1000490757.jpg" sizes="192x192" type="image/jpeg">
    <link rel="apple-touch-icon" href="https://kemo-alamy.github.io/Kemo-Store-/1000490757.jpg" sizes="180x180">
    <link rel="shortcut icon" href="https://kemo-alamy.github.io/Kemo-Store-/1000490757.jpg" type="image/jpeg">
    
    <link rel="canonical" href="https://kemo-alamy.github.io/Kemo-Store-/"> 
    <meta property="og:url" content="https://kemo-alamy.github.io/Kemo-Store-/">
    <meta property="og:title" content="Kemo Store | شحن ألعاب فوري">
    <meta property="og:description" content="اشحن لعبتك المفضلة الآن في ثواني بأرخص الأسعار في مصر والوطن العربي مع Kemo Store.">
    <meta property="og:image" content="https://kemo-alamy.github.io/Kemo-Store-/1000490757.jpg"> 
    <meta property="og:type" content="website">

    <!-- كود JSON-LD لإجبار جوجل على تغيير اسم الموقع في البحث إلى Kemo Store -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kemo Store",
      "alternateName": "كيمو ستور",
      "url": "https://kemo-alamy.github.io/Kemo-Store-/"
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Kemo Store",
      "image": "https://kemo-alamy.github.io/Kemo-Store-/1000490757.jpg",
      "description": "متجر لشحن الألعاب الإلكترونية بأرخص الأسعار وتسليم فوري.",
      "url": "https://kemo-alamy.github.io/Kemo-Store-/",
      "telephone": "+201115168017"
    }
    </script>
    <!-- ========================================================================================= -->
    
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"></script>

    <script>
        const manifest = { "name": "Kemo Store", "short_name": "𝑲𝒆𝒎𝒐 𝑺𝒕𝒐𝒓𝒆", "start_url": ".", "display": "standalone", "background_color": "#0f141e", "theme_color": "#f89e1b", "icons": [{"src": "1000490757.jpg", "sizes": "192x192", "type": "image/jpeg"}] };
        const manifestBlob = new Blob([JSON.stringify(manifest)], {type: 'application/json'});
        const manifestUrl = URL.createObjectURL(manifestBlob);
        document.write(`<link rel="manifest" href="${manifestUrl}">`);
    </script>

    <style>
        :root { 
            --bg-dark: #0f141e; --bg-card: #18202f; --primary: #f89e1b; --primary-hover: #d97706; 
            --accent: #8B5CF6; --text-main: #F3F4F6; --text-muted: #9CA3AF; --danger: #EF4444; 
            --success: #10B981; --whatsapp: #25D366; --border-color: #2a3447;
            --sale-badge: #6b21a8; 
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Cairo', sans-serif; }
        body { background-color: var(--bg-dark); color: var(--text-main); overflow-x: hidden; }
        
        button, a, input, select, .product-card, .close-side { touch-action: manipulation; }
        


        header { background: var(--bg-card); position: sticky; top: 0; z-index: 1000; padding: 15px 5%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; border-bottom: 1px solid var(--border-color); }
        .logo { font-size: 24px; font-weight: 900; color: var(--primary); display: flex; align-items: center; gap: 8px; }
        .logo i { color: var(--accent); }
        
        .nav-actions { display: flex; align-items: center; gap: 15px; flex-wrap: wrap; }
        .icon-btn-wrapper { display: flex; gap: 10px; }
        .cart-icon-btn { background: var(--bg-dark); border: 1px solid var(--border-color); width: 45px; height: 45px; border-radius: 12px; font-size: 18px; color: var(--text-main); cursor: pointer; position: relative; transition: 0.2s; display: flex; justify-content: center; align-items: center; }
        .cart-icon-btn:hover { border-color: var(--primary); color: var(--primary); }
        .cart-icon-btn.heart-icon:hover { border-color: var(--danger); color: var(--danger); }
        .cart-badge { position: absolute; top: -5px; right: -5px; background: var(--primary); color: #000; font-size: 11px; font-weight: 900; width: 20px; height: 20px; border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid var(--bg-card); }

        .user-area { display: flex; align-items: center; gap: 10px; }
        
        .btn-google { 
            background-color: #131314 !important; 
            border: 1px solid #747775 !important; 
            color: #e3e3e3 !important; 
            padding: 8px 20px !important; 
            border-radius: 40px !important; 
            font-family: 'Cairo', sans-serif !important; 
            font-weight: 600 !important; 
            font-size: 14px !important; 
            cursor: pointer !important; 
            display: flex !important; 
            align-items: center !important; 
            gap: 12px !important; 
            transition: all 0.2s ease !important; 
            outline: none !important; 
            box-shadow: none !important;
        }
        .btn-google:hover { 
            background-color: #1e1e1e !important; 
            border-color: #8e918f !important; 
        }
        .btn-google svg { 
            width: 20px !important; 
            height: 20px !important; 
            background: transparent !important; 
            border-radius: 0 !important; 
            padding: 0 !important; 
            border: none !important; 
        }

        .user-profile { display: flex; align-items: center; gap: 8px; background: var(--bg-dark); padding: 5px 15px 5px 5px; border-radius: 30px; border: 1px solid var(--primary); box-shadow: 0 0 10px rgba(248, 158, 27, 0.1);}
        .user-profile img { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary); }
        .user-profile span { font-weight: 700; font-size: 14px; }
        .btn-logout-small { background: transparent; border: none; color: var(--danger); cursor: pointer; font-size: 16px; padding: 5px; }
        .btn-admin-nav { display: none; background: var(--primary); color: #000; padding: 8px 15px; border-radius: 10px; font-size: 14px; font-weight: bold; border: none; cursor: pointer; transition: 0.2s; }

        #btn-install-app { display: none; background: var(--accent); color: white; padding: 8px 15px; border-radius: 10px; font-size: 13px; font-weight: bold; border: none; cursor: pointer; animation: pulse 2s infinite; }

        .container { max-width: 1200px; margin: 0 auto; padding: 20px 15px 50px; }
        
        .hero-slider { position: relative; width: 100%; height: 180px; border-radius: 15px; overflow: hidden; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
        .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; text-align: center; opacity: 0; transition: opacity 0.6s ease-in-out; padding: 20px; z-index: 0; }
        .slide.active { opacity: 1; z-index: 1; }
        .slide-content h2 { color: #fff; font-size: 22px; font-weight: 900; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        .slide-content p { color: #fff; font-size: 14px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); font-weight: 600; }

        .store-search-container { display: flex; margin-bottom: 20px; position: relative; }
        .store-search-container input { width: 100%; background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-main); padding: 12px 15px 12px 40px; border-radius: 12px; outline: none; font-family: 'Cairo'; font-size: 14px; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .store-search-container input:focus { border-color: var(--primary); box-shadow: 0 0 10px rgba(248, 158, 27, 0.2); }
        .store-search-container i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }

        .sidebar-categories { width: 100%; display: flex; gap: 10px; overflow-x: auto; padding: 10px 0; margin-bottom: 20px; scrollbar-width: none; }
        .sidebar-categories::-webkit-scrollbar { display: none; }
        .cat-btn { background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 10px; font-size: 14px; font-weight: 800; cursor: pointer; transition: 0.2s; white-space: nowrap; }
        .cat-btn.active { background: var(--primary); color: #000; border-color: var(--primary); }

        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; width: 100%; }
        
        .product-card { background: var(--bg-card); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); display: flex; flex-direction: column; position: relative; transition: 0.2s; cursor: pointer;}
        .product-card:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.5); border-color: var(--primary);}
        .product-card.inactive { opacity: 0.5; filter: grayscale(1); }
        .product-card.expired { opacity: 0.7; }
        .sale-badge { position: absolute; top: 0; right: 0; background: var(--sale-badge); color: white; padding: 5px 15px; font-size: 12px; font-weight: 900; border-bottom-left-radius: 12px; z-index: 10; letter-spacing: 1px;}
        
        .product-img-wrapper { height: 160px; background: #000; position: relative; display: flex; justify-content: center; align-items: center; padding: 15px;}
        .product-img-wrapper img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;}
        .like-btn { position: absolute; top: 10px; left: 10px; background: rgba(0, 0, 0, 0.6); border: 1px solid var(--border-color); width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 14px; color: var(--text-muted); cursor: pointer; z-index: 10; transition: 0.2s;}
        .like-btn.liked { color: var(--danger); border-color: var(--danger); }
        .like-btn:hover { color: var(--danger); border-color: var(--danger); transform: scale(1.1); }
        
        .product-info { padding: 15px; text-align: center; display: flex; flex-direction: column; flex: 1; }
        .product-title { font-size: 14px; font-weight: 800; color: #fff; margin-bottom: 5px; }
        .product-price { font-size: 18px; font-weight: 900; color: var(--primary); margin-bottom: 5px; display: flex; justify-content: center; align-items: center; gap: 8px;}
        .old-price { font-size: 12px; color: var(--text-muted); text-decoration: line-through; font-weight: normal;}
        .stock-warning { font-size: 11px; font-weight: bold; color: var(--danger); margin-bottom: 8px; }
        
        .stars-container { margin-bottom: 5px; display: flex; flex-direction: column; align-items: center; }
        .stars { display: flex; gap: 2px; flex-direction: row-reverse; justify-content: center; }
        .star-btn { background: transparent; border: none; font-size: 16px; color: var(--border-color); cursor: pointer; transition: 0.2s; }
        .star-btn.active, .star-btn:hover, .star-btn:hover ~ .star-btn { color: #fbbf24; }
        .rating-text { font-size: 10px; color: var(--text-muted); margin-top: 2px; }

        .countdown-timer { display: flex; justify-content: center; gap: 5px; margin-bottom: 10px; font-weight: 900; color: #fff; font-size: 12px; direction: ltr; }
        .countdown-timer span { background: var(--danger); padding: 3px 6px; border-radius: 6px; box-shadow: 0 2px 5px rgba(239,68,68,0.5); min-width: 28px; text-align: center; }
        .countdown-timer.ended { color: var(--danger); direction: rtl; font-size: 13px; font-weight: 900; background: rgba(239, 68, 68, 0.1); padding: 5px; border-radius: 8px; border: 1px dashed var(--danger); }
        .countdown-timer.ended span { display: none; }

        .share-btn-modal { position: absolute; top: 15px; left: 45px; background: rgba(248, 158, 27, 0.15); border: 1px solid rgba(248, 158, 27, 0.3); color: var(--primary); width: 35px; height: 35px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 15px; cursor: pointer; transition: 0.2s; box-shadow: 0 0 10px rgba(248, 158, 27, 0.2); }
        .share-btn-modal:hover { background: var(--primary); color: #000; transform: scale(1.1); }

        .btn { width: 100%; padding: 10px; border: none; border-radius: 8px; font-size: 14px; font-weight: 800; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; transition: 0.2s; margin-top: auto;}
        .btn-cart { background: var(--primary); color: #000; }
        .btn-cart:active { transform: scale(0.95); } 
        .btn-cart:disabled { background: var(--border-color); color: var(--text-muted); cursor: not-allowed; transform: none;}
        .btn-buy { background: var(--whatsapp); color: #fff; }
        .btn-edit { background: rgba(16, 185, 129, 0.1); color: var(--success); border: 1px solid var(--success); }
        .btn-toggle { background: var(--bg-dark); color: #fff; border: 1px solid var(--border-color); }

        .skeleton { animation: skeleton-loading 1s linear infinite alternate; }
        @keyframes skeleton-loading { 0% { background-color: var(--border-color); } 100% { background-color: var(--bg-card); } }
        .skeleton-card { height: 250px; border-radius: 12px; }

        .related-scroll { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 15px; scrollbar-width: none; }
        .related-scroll::-webkit-scrollbar { display: none; }
        .related-item { min-width: 110px; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px; text-align: center; cursor: pointer; transition: 0.2s; }
        .related-item:hover { border-color: var(--primary); transform: translateY(-3px); }
        .related-item img { width: 100%; height: 70px; object-fit: contain; margin-bottom: 5px; border-radius: 5px; }
        .related-item-title { font-size: 11px; color: var(--text-main); font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .reviews-container { max-height: 150px; overflow-y: auto; text-align: right; margin-bottom: 15px; background: var(--bg-dark); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; }
        .review-card { background: var(--bg-card); padding: 8px 12px; border-radius: 8px; margin-bottom: 8px; border-right: 3px solid var(--primary); }
        .review-header { display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 3px; color: var(--text-muted); }
        .review-text { font-size: 12px; color: var(--text-main); font-weight: 600; }

        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 2000; display: none; opacity: 0; transition: 0.2s; }
        .overlay.active { display: block; opacity: 1; }
        
        .side-panel { position: fixed; top: 0; right: -100%; width: 350px; max-width: 100%; height: 100%; background: var(--bg-card); z-index: 2001; transition: 0.25s ease-out; display: flex; flex-direction: column; border-left: 1px solid var(--border-color); }
        .side-panel.active { right: 0; }
        .side-header { padding: 15px 20px; background: var(--bg-dark); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
        .side-items { flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; }
        
        .cart-item { display: flex; gap: 10px; background: var(--bg-dark); padding: 10px; border-radius: 10px; border: 1px solid var(--border-color); align-items: center;}
        .cart-item img { width: 60px; height: 60px; border-radius: 8px; object-fit: contain; }
        .cart-item-details { flex: 1; }
        .cart-item-title { font-weight: 800; font-size: 13px; color: var(--text-main); margin-bottom: 5px;}
        .qty-controls { display: flex; align-items: center; gap: 10px; margin-top: 5px; background: var(--bg-card); width: max-content; padding: 2px 5px; border-radius: 6px; }
        .qty-btn { background: transparent; border: none; color: var(--text-main); cursor: pointer; font-weight: bold; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center;}
        .cart-item-delete { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: var(--danger); min-width: 35px; height: 35px; border-radius: 8px; display: flex; justify-content: center; align-items: center; cursor: pointer; transition: 0.2s; font-size: 15px; margin-right: auto; }
        .cart-item-delete:hover { background: var(--danger); color: #fff; transform: scale(1.05); }

        .side-footer { padding: 15px; background: var(--bg-dark); border-top: 1px solid var(--border-color); }
        .input-box { margin-bottom: 15px; }
        .input-box label { display: block; font-size: 12px; color: var(--primary); margin-bottom: 5px; font-weight: bold; }
        .input-box input { width: 100%; background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-main); padding: 10px; border-radius: 8px; outline: none; font-family: 'Cairo'; }

        .coupon-area { display: flex; gap: 10px; margin-bottom: 10px; }
        .coupon-area input { flex: 1; background: var(--bg-card); border: 1px solid var(--border-color); color: white; padding: 8px; border-radius: 8px; outline: none; font-family: 'Cairo'; }
        .coupon-area button { background: var(--accent); border: none; color: white; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; font-family: 'Cairo'; transition: 0.2s;}
        .coupon-area button:active { transform: scale(0.95); }

        .order-card { background: var(--bg-dark); border: 1px solid var(--border-color); padding: 15px; border-radius: 10px; margin-bottom: 10px; position: relative;}
        .order-header { display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 10px; font-size: 13px; font-weight:bold;}
        
        .order-tracker { display: flex; justify-content: space-between; margin-top: 15px; position: relative; padding: 0 10px; }
        .order-tracker::before { content: ''; position: absolute; top: 12px; left: 20px; right: 20px; height: 2px; background: var(--border-color); z-index: 1; }
        .tracker-step { display: flex; flex-direction: column; align-items: center; gap: 5px; z-index: 2; font-size: 10px; font-weight: bold; color: var(--text-muted); width: 33%; text-align: center;}
        .tracker-step.active { color: var(--primary); }
        .tracker-step.done { color: var(--success); }
        .tracker-step.rejected { color: var(--danger); }
        .step-icon { width: 25px; height: 25px; border-radius: 50%; background: var(--bg-card); border: 2px solid var(--border-color); display: flex; justify-content: center; align-items: center; font-size: 12px; }
        .tracker-step.active .step-icon { background: var(--primary); border-color: var(--primary); color: #000; box-shadow: 0 0 10px rgba(248, 158, 27, 0.5); }
        .tracker-step.done .step-icon { background: var(--success); border-color: var(--success); color: #fff; }
        .tracker-step.rejected .step-icon { background: var(--danger); border-color: var(--danger); color: #fff; }

        .badge-pending { background: rgba(245, 158, 11, 0.2); color: var(--primary); padding: 3px 8px; border-radius: 5px; font-size: 12px; }
        .badge-completed { background: rgba(16, 185, 129, 0.2); color: var(--success); padding: 3px 8px; border-radius: 5px; font-size: 12px; }
        .badge-rejected { background: rgba(239, 68, 68, 0.2); color: var(--danger); padding: 3px 8px; border-radius: 5px; font-size: 12px; }
        .badge-late { background: var(--danger); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; margin-right: 5px; animation: pulse 1.5s infinite;}
        
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        .dashboard-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: var(--bg-dark); border: 1px solid var(--border-color); padding: 15px; border-radius: 12px; text-align: center; }
        .stat-card h4 { font-size: 12px; color: var(--text-muted); margin-bottom: 5px; }
        .stat-card .val { font-size: 20px; font-weight: 900; color: var(--primary); }

        .admin-filters { display: flex; gap: 10px; margin-bottom: 15px; overflow-x: auto; padding-bottom: 5px; }
        .admin-filters button { background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-color); padding: 5px 15px; border-radius: 8px; font-size: 12px; cursor: pointer; white-space: nowrap; }
        .admin-filters button.active { background: var(--primary); color: #000; border-color: var(--primary); font-weight: bold; }

        .search-box { display: flex; gap: 10px; margin-bottom: 15px; }
        .search-box input { flex: 1; background: var(--bg-dark); border: 1px solid var(--primary); color: white; padding: 10px; border-radius: 8px; outline: none; font-family: 'Cairo'; box-shadow: 0 0 10px rgba(248, 158, 27, 0.1);}
        
        .admin-panel { background: var(--bg-dark); padding: 20px; border-radius: 15px; border: 1px solid var(--border-color); margin-bottom: 30px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .input-group { display: flex; flex-direction: column; gap: 5px; }
        .input-group label { font-weight: 700; color: var(--text-muted); font-size: 12px; }
        .input-group input, .input-group select, .input-group textarea { background: var(--bg-card); color: var(--text-main); padding: 10px; border: 1px solid var(--border-color); border-radius: 8px; outline: none; font-family: 'Cairo'; resize: vertical; }
        
        #toast { visibility: hidden; min-width: 250px; background-color: var(--bg-dark); color: #fff; text-align: center; border-radius: 8px; padding: 12px; position: fixed; z-index: 10000; left: 50%; transform: translateX(-50%); bottom: 30px; font-size: 14px; font-weight: bold; border: 1px solid var(--primary); opacity: 0; transition: 0.2s; }
        #toast.show { visibility: visible; opacity: 1; transform: translateX(-50%) translateY(-20px); }

        .custom-modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); background: var(--bg-card); padding: 35px 25px; border-radius: 20px; border: 1px solid var(--primary); box-shadow: 0 10px 40px rgba(0,0,0,0.8); z-index: 3000; width: 90%; max-width: 400px; max-height: 90vh; overflow-y: auto; text-align: center; opacity: 0; visibility: hidden; transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .custom-modal.active { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
        .custom-modal::-webkit-scrollbar { width: 5px; }
        .custom-modal::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 5px; }
        .custom-modal i.main-icon { font-size: 50px; color: var(--primary); margin-bottom: 15px; text-shadow: 0 0 15px rgba(248, 158, 27, 0.4); }
        .custom-modal h3 { color: #fff; margin-bottom: 10px; font-size: 20px; font-weight: 900;}
        .custom-modal p { color: var(--text-muted); margin-bottom: 25px; font-size: 13px; line-height: 1.6;}
        .custom-modal input.name-input, .review-input { width: 100%; background: var(--bg-dark); border: 1px solid var(--border-color); color: white; padding: 12px; border-radius: 10px; font-family: 'Cairo'; margin-bottom: 10px; outline: none; font-size: 14px; font-weight: bold;}
        .custom-modal input.name-input:focus, .review-input:focus { border-color: var(--primary); }

        .live-popup { position: fixed; bottom: -100px; right: 20px; background: rgba(24, 32, 47, 0.95); border: 1px solid var(--primary); border-radius: 12px; padding: 10px 15px; display: flex; align-items: center; gap: 12px; z-index: 1500; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity: 0; box-shadow: 0 10px 25px rgba(0,0,0,0.5); backdrop-filter: blur(5px); max-width: 320px; pointer-events: none;}
        .live-popup.show { bottom: 20px; opacity: 1; }
        .live-popup img { width: 45px; height: 45px; border-radius: 8px; object-fit: contain; background: #000; border: 1px solid var(--border-color); padding: 2px; }
        .live-popup-text { display: flex; flex-direction: column; text-align: right;}
        .live-popup-text .name { font-size: 13px; font-weight: 900; color: var(--primary); margin-bottom: 2px;}
        .live-popup-text .action { font-size: 11px; color: #fff; margin-bottom: 2px;}
        .live-popup-text .prod { color: var(--success); font-weight: bold; }
        .live-popup-text small { font-size: 10px; color: var(--text-muted); }

        .whatsapp-support-btn { position: fixed; bottom: 20px; left: 20px; background-color: var(--whatsapp); color: white; width: 55px; height: 55px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 32px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); z-index: 1000; text-decoration: none; transition: 0.2s; }
        .whatsapp-support-btn:hover { transform: scale(1.1); background-color: #1DA851; color: white; }
        .whatsapp-support-btn:active { transform: scale(0.9); }

        @media (max-width: 600px) {
            .products-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
            .product-img-wrapper { height: 130px; }
            .form-grid { grid-template-columns: 1fr; }
            .hero-slider { height: 150px; }
            .live-popup { right: 10px; left: 10px; max-width: auto; top: -100px; bottom: auto; }
            .live-popup.show { top: 80px; bottom: auto; }
        }
    </style>
    

</head>
<body>

    <audio id="welcome-audio" src="welcome.mp3" preload="auto"></audio>



    <header>
        <div class="logo"><i class="fa-solid fa-gamepad"></i> 𝑲𝒆𝒎𝒐 𝑺𝒕𝒐𝒓𝒆</div>
        <div class="nav-actions">
            <button id="btn-install-app"><i class="fa-solid fa-download"></i> تثبيت التطبيق</button>
            
            <div class="icon-btn-wrapper">
                <button class="cart-icon-btn heart-icon" onclick="openSidebar('wishlist-sidebar')"><i class="fa-solid fa-heart"></i></button>
                <button class="cart-icon-btn" onclick="openSidebar('orders-sidebar')"><i class="fa-solid fa-box-open"></i></button>
                <button class="cart-icon-btn" onclick="openSidebar('cart-sidebar')">
                    <i class="fa-solid fa-cart-shopping"></i><span class="cart-badge" id="cart-badge-count">0</span>
                </button>
            </div>
            <button id="btn-admin-nav" class="btn-admin-nav" onclick="switchTab('admin')">الإدارة</button>
            <div id="user-area" class="user-area">
                <button class="btn-google" onclick="handleAuth('login')">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                    <span>سجل دخولك</span>
                </button>
            </div>
        </div>
    </header>

    <div class="overlay" id="main-overlay" onclick="closeAllSidebars()"></div>

    <div class="overlay" id="tutorial-modal-overlay" style="z-index: 3000;"></div>
    <div class="custom-modal" id="tutorial-modal" style="z-index: 3001;">
        <i class="fa-solid fa-circle-play main-icon"></i>
        <h3>كيفية الشراء من المتجر 🛒</h3>
        <p style="text-align: right;">1- اختر المنتج اللي محتاجه واضغط "شحن الآن".<br><br>2- روح للسلة 🛒 واكتب الـ ID بتاعك ورقم الواتساب.<br><br>3- اضغط "إرسال الطلب" هيحولك للواتساب لتأكيد الدفع والشحن فوراً.</p>
        <button class="btn btn-cart" onclick="closeTutorial()">فهمت، يلا نبدأ <i class="fa-solid fa-check"></i></button>
    </div>

    <div class="overlay" id="name-modal-overlay" style="z-index: 2999;"></div>
    <div class="custom-modal" id="name-modal">
        <i class="fa-solid fa-user-astronaut main-icon"></i>
        <h3>خطوة أخيرة يا بطل! 🎮</h3>
        <p>اكتب اسمك عشان نقدر نستخدمه في فواتير الشحن وتسريع عملية طلبك عندنا.</p>
        <input type="text" id="new-user-name-input" class="name-input" placeholder="اكتب اسمك هنا...">
        <button class="btn btn-cart" onclick="saveNewUserName()">حفظ ومتابعة <i class="fa-solid fa-arrow-left"></i></button>
    </div>

    <div class="overlay" id="details-modal-overlay" style="z-index: 2999;" onclick="closeDetailsModal()"></div>
    <div class="custom-modal" id="details-modal" style="text-align: right; padding-top: 45px;">
        <button class="share-btn-modal" onclick="shareProduct()" title="مشاركة المنتج"><i class="fa-solid fa-share-nodes"></i></button>
        <button onclick="closeDetailsModal()" style="position: absolute; top: 15px; left: 15px; background: transparent; border: none; color: var(--text-muted); font-size: 20px; cursor: pointer; transition: 0.2s;"><i class="fa-solid fa-xmark"></i></button>
        
        <div style="text-align: center; margin-bottom: 10px;">
            <img id="details-img" src="" style="width: 140px; height: 140px; object-fit: contain; border-radius: 12px; border: 1px solid var(--primary); padding: 5px; background: #000;">
        </div>
        
        <div class="stars-container" id="details-rating-container">
            <div class="stars" id="interactive-stars"></div>
            <div class="rating-text" id="rating-text-info">قيّم هذا المنتج</div>
        </div>

        <h3 id="details-title" style="color: #fff; font-size: 18px; margin-bottom: 5px; text-align: center;"></h3>
        <div id="details-timer-container"></div>
        <div id="details-price" style="text-align: center; color: var(--primary); font-size: 22px; font-weight: 900; margin-bottom: 15px;"></div>
        
        <div style="background: var(--bg-dark); padding: 12px; border-radius: 8px; margin-bottom: 15px; border: 1px solid var(--border-color);">
            <h4 style="font-size: 13px; color: var(--primary); margin-bottom: 8px; font-weight: 800;"><i class="fa-solid fa-circle-info"></i> تفاصيل المنتج:</h4>
            <p id="details-desc" style="font-size: 13px; color: var(--text-main); line-height: 1.6; white-space: pre-wrap; margin-bottom: 0;"></p>
        </div>
        
        <div id="details-stock" style="text-align: center; margin-bottom: 10px;"></div>
        <button class="btn btn-cart" id="details-buy-btn" style="margin-bottom: 20px;">شحن الآن <i class="fa-solid fa-cart-plus"></i></button>
        
        <h4 style="font-size: 13px; color: #fff; margin-bottom: 10px; text-align: right;"><i class="fa-solid fa-fire" style="color:var(--primary);"></i> عروض قد تعجبك:</h4>
        <div class="related-scroll" id="related-products-list"></div>

        <h4 style="font-size: 13px; color: #fff; margin-bottom: 10px; text-align: right;"><i class="fa-solid fa-comments" style="color:var(--accent);"></i> آراء جميع الزبائن:</h4>
        <div class="reviews-container" id="product-reviews-list"></div>
        <div style="display: flex; gap: 5px;">
            <input type="text" id="review-input-text" class="review-input" placeholder="اكتب رأيك هنا..." style="margin:0; flex:1;">
            <button onclick="submitReviewText()" style="background: var(--accent); color: white; border: none; border-radius: 10px; padding: 0 15px; font-weight: bold; font-family: 'Cairo'; cursor: pointer;"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
    </div>

    <div id="live-purchase-popup" class="live-popup">
        <img src="" id="live-popup-img">
        <div class="live-popup-text">
            <span class="name" id="live-popup-name"></span>
            <span class="action">قام بشراء <span class="prod" id="live-popup-prod"></span> الآن!</span>
            <small>منذ لحظات</small>
        </div>
    </div>

    <a href="https://wa.me/201115168017" class="whatsapp-support-btn" target="_blank" title="تحدث مع الدعم الفني">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

    <div class="side-panel" id="cart-sidebar">
        <div class="side-header">
            <h3><i class="fa-solid fa-basket-shopping" style="color:var(--primary)"></i> سلة الشحن</h3>
            <button class="close-side" onclick="closeAllSidebars()" style="background:transparent; border:none; color:#fff; font-size:20px;"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="side-items" id="cart-items"></div>
        <div class="side-footer">
            <div class="input-box">
                <label>الـ ID / الحساب (أرقام فقط - 10 أرقام كحد أدنى)</label>
                <input type="text" id="customer-game-id" placeholder="مثال: 12345678901" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
            </div>
            <div class="input-box">
                <label>رقم الواتساب الخاص بك (مهم للتواصل)</label>
                <input type="tel" id="customer-phone" placeholder="مثال: 01012345678">
            </div>
            
            <div class="coupon-area">
                <input type="text" id="promo-code" placeholder="لديك كود خصم؟">
                <button onclick="applyCoupon()">تطبيق</button>
            </div>
            <div id="coupon-msg" style="font-size:12px; margin-bottom:10px; font-weight:bold;"></div>

            <div style="display: flex; justify-content: space-between; font-weight: 900; margin-bottom: 10px;">
                <span>الإجمالي:</span><span style="color: var(--primary);"><span id="cart-total-price">0</span> ج.م</span>
            </div>
            <button class="btn btn-buy" onclick="checkoutWhatsApp()"><i class="fa-brands fa-whatsapp fa-lg"></i> إرسال الطلب</button>
        </div>
    </div>

    <div class="side-panel" id="orders-sidebar">
        <div class="side-header">
            <h3><i class="fa-solid fa-box-open" style="color:var(--primary)"></i> طلباتي</h3>
            <button class="close-side" onclick="closeAllSidebars()" style="background:transparent; border:none; color:#fff; font-size:20px;"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="side-items" id="user-orders-list"></div>
    </div>

    <div class="side-panel" id="wishlist-sidebar">
        <div class="side-header">
            <h3><i class="fa-solid fa-heart" style="color:var(--danger)"></i> المفضلة</h3>
            <button class="close-side" onclick="closeAllSidebars()" style="background:transparent; border:none; color:#fff; font-size:20px;"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="side-items" id="wishlist-items"></div>
    </div>

    <div id="store-section">
        <div class="container store-layout">
            
            <div class="hero-slider">
                <div class="slide active" style="background: linear-gradient(135deg, #f89e1b, #d97706);">
                    <div class="slide-content">
                        <h2>🔥 أقوى العروض الحصرية</h2>
                        <p>شحن جميع الألعاب بأسعار لا تقبل المنافسة</p>
                    </div>
                </div>
                <div class="slide" style="background: linear-gradient(135deg, #8B5CF6, #6b21a8);">
                    <div class="slide-content">
                        <h2>🚀 شحن فوري وآمن 100%</h2>
                        <p>طلب بيوصلك في ثواني معدودة وبكل أمان</p>
                    </div>
                </div>
                <div class="slide" style="background: linear-gradient(135deg, #10B981, #047857);">
                    <div class="slide-content">
                        <h2>💎 جودة وثقة في التعامل</h2>
                        <p>نحن دائماً في خدمتك على مدار الساعة!</p>
                    </div>
                </div>
            </div>

            <div class="store-search-container">
                <input type="text" id="customer-search-input" placeholder="ابحث عن اللعبة أو المنتج اللي بتدور عليه هنا..." oninput="renderProducts()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div class="sidebar-categories" id="store-category-filter"></div>
            <div class="products-grid" id="products-list">
                <div class="skeleton skeleton-card"></div>
                <div class="skeleton skeleton-card"></div>
                <div class="skeleton skeleton-card"></div>
                <div class="skeleton skeleton-card"></div>
            </div>
        </div>
    </div>

    <div id="admin-section" class="container" style="display: none;">
        <button class="btn" style="background:var(--bg-card); color:var(--text-main); width:max-content; margin-bottom:20px;" onclick="switchTab('store')">العودة للمتجر</button>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom:15px;">
            <h3 style="color:var(--primary); margin: 0;"><i class="fa-solid fa-chart-pie"></i> إحصائيات المتجر</h3>
            <button onclick="manualResetStats()" style="background: transparent; border: 1px solid var(--danger); color: var(--danger); padding: 5px 10px; border-radius: 8px; font-size: 12px; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-rotate-right"></i> تصفير الإحصائيات</button>
        </div>
        <div class="dashboard-stats" style="background: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 30px;">
            <div class="stat-card"><h4>إجمالي المبيعات</h4><div class="val" id="stat-revenue">0 ج.م</div></div>
            <div class="stat-card"><h4>صافي الربح</h4><div class="val" style="color:var(--accent);" id="stat-net-profit">0 ج.م</div></div>
            <div class="stat-card"><h4>مكتمل</h4><div class="val" style="color:var(--success);" id="stat-completed">0</div></div>
            <div class="stat-card"><h4>معلق</h4><div class="val" style="color:var(--danger);" id="stat-pending">0</div></div>
        </div>

        <h3 style="margin-bottom:15px; color:var(--primary);"><i class="fa-solid fa-truck-fast"></i> إدارة الطلبات</h3>
        <div class="admin-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 10px;">
                <div class="admin-filters" style="margin: 0; padding: 0;">
                    <button class="active" onclick="filterAdminOrders('all', this)">الكل</button>
                    <button onclick="filterAdminOrders('pending', this)">معلق ⏳</button>
                    <button onclick="filterAdminOrders('completed', this)">مكتمل ✅</button>
                    <button onclick="filterAdminOrders('rejected', this)">مرفوض ❌</button>
                </div>
                <div style="display:flex; gap:10px;">
                    <button onclick="exportOrdersToExcel()" style="background: #10B981; color: white; border: none; padding: 5px 15px; border-radius: 8px; font-size: 12px; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-file-excel"></i> تصدير Excel</button>
                    <button onclick="deleteAllFilteredOrders()" style="background: var(--danger); color: white; border: none; padding: 5px 15px; border-radius: 8px; font-size: 12px; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-trash-can"></i> حذف المعروض</button>
                </div>
            </div>
            
            <div class="search-box">
                <input type="text" id="admin-order-search" placeholder="ابحث برقم الطلب (مثال: KEMO-1234) أو بالـ ID" oninput="searchOrders()">
                <button class="btn" style="width:auto;" onclick="searchOrders()"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div id="admin-orders-list" style="max-height: 400px; overflow-y:auto;"></div>
        </div>

        <h3 style="margin-bottom:15px; color:var(--primary);"><i class="fa-solid fa-ticket"></i> إضافة كوبون خصم</h3>
        <div class="admin-panel">
            <div class="form-grid">
                <div class="input-group"><label>كود الكوبون</label><input type="text" id="c-code" placeholder="مثال: KEMO10"></div>
                <div class="input-group"><label>نسبة الخصم (%)</label><input type="number" id="c-percent" placeholder="مثال: 10"></div>
                <div class="input-group"><label>عدد الاستخدامات المسموحة</label><input type="number" id="c-uses" placeholder="مثال: 50"></div>
                
                <div class="input-group" style="grid-column: 1 / -1;">
                    <label>تحديد المنتجات المشمولة بالخصم (اتركها بدون تحديد لتطبيق الكود على كل المنتجات)</label>
                    <div id="coupon-products-checkboxes" style="background:var(--bg-dark); padding:10px; border-radius:8px; border:1px solid var(--border-color); max-height:200px; overflow-y:auto; display:flex; flex-direction:column; gap:10px;">
                    </div>
                </div>

                <button class="btn btn-cart" style="grid-column: 1 / -1;" onclick="addCoupon()">حفظ الكوبون</button>
            </div>
            <div id="admin-coupons-list" style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;"></div>
        </div>

        <h3 style="margin-bottom:15px; color:var(--primary);"><i class="fa-solid fa-plus"></i> إضافة / تعديل منتج</h3>
        <div class="admin-panel">
            <input type="hidden" id="p-id">
            <div class="form-grid">
                <div class="input-group">
                    <label>القسم</label>
                    <select id="p-category" onchange="checkNewCategory()"><option value="none">بدون قسم</option></select>
                    <input type="text" id="p-new-cat" placeholder="اسم القسم الجديد..." style="display:none; margin-top:5px;">
                    <button type="button" id="btn-delete-cat" onclick="deleteSelectedCategory()" style="display:none; background:var(--danger); color:white; padding:8px 15px; border:none; border-radius:8px; margin-top:5px; cursor:pointer; font-size:12px; font-weight:bold; width:max-content;"><i class="fa-solid fa-trash"></i> حذف هذا القسم</button>
                </div>
                <div class="input-group"><label>الاسم (مثال: 210 جوهرة)</label><input type="text" id="p-name"></div>
                <div class="input-group"><label>السعر الحالي للبيع (ج.م)</label><input type="number" id="p-price"></div>
                <div class="input-group"><label>سعر التكلفة عليك (لحساب الربح ومنع الخسارة بالكوبون)</label><input type="number" id="p-cost" placeholder="سعر الشراء الفعلي"></div>
                <div class="input-group"><label>السعر القديم (مكانه مشطوب)</label><input type="number" id="p-old-price" placeholder="اختياري"></div>
                <div class="input-group"><label>نص الخصم (زي: Sale أو Off 7%)</label><input type="text" id="p-badge" placeholder="اختياري"></div>
                <div class="input-group"><label>الكمية المتاحة (المخزون)</label><input type="number" id="p-stock" placeholder="لو أقل من 10 هيكتبله قربت تخلص"></div>
                
                <div class="input-group" style="grid-column: 1 / -1;">
                    <label>تاريخ ووقت انتهاء العرض المحدود (اختياري)</label>
                    <input type="datetime-local" id="p-countdown">
                </div>
                
                <div class="input-group" style="grid-column: 1 / -1; flex-direction: row; align-items: center; gap: 10px;">
                    <input type="checkbox" id="p-is-active" checked style="width:20px; height:20px;">
                    <label style="margin:0; font-size: 14px; color: var(--success);">المنتج مفعل (يظهر للعملاء)</label>
                </div>

                <div class="input-group" style="grid-column: 1 / -1;"><label>تفاصيل ووصف المنتج</label><textarea id="p-details" rows="3" placeholder="اختياري: اكتب تفاصيل إضافية للمنتج تظهر عند الضغط عليه..."></textarea></div>
                <div class="input-group" style="grid-column: 1 / -1;"><label>صورة المنتج</label><input type="file" id="p-image" accept="image/*"></div>
                <div class="input-group" style="grid-column: 1 / -1;"><label>ملاحظة افتراضية للواتساب</label><input type="text" id="p-msg" placeholder="اختياري: مثال اشحنلي يا كيمو"></div>
                
                <button class="btn btn-cart" id="add-btn" style="grid-column: 1 / -1;" onclick="saveProduct()">حفظ ونشر</button>
                <button class="btn" id="cancel-edit-btn" style="grid-column: 1 / -1; display:none; background:var(--danger); color:white;" onclick="cancelEdit()">إلغاء التعديل</button>
            </div>
        </div>
        
        <h3 style="margin-bottom:15px; color:var(--primary);">المنتجات الحالية</h3>
        <div class="products-grid" id="admin-products-list"></div>
    </div>

    <div id="toast">رسالة</div>

    <script>
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault(); deferredPrompt = e;
            const installBtn = document.getElementById('btn-install-app');
            installBtn.style.display = 'inline-block';
            installBtn.addEventListener('click', () => {
                installBtn.style.display = 'none';
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => { deferredPrompt = null; });
            });
        });



        window.addEventListener('load', () => {
            if(!localStorage.getItem('kemo_tutorial_seen')) {
                setTimeout(() => {
                    document.getElementById('tutorial-modal-overlay').classList.add('active');
                    document.getElementById('tutorial-modal').classList.add('active');
                }, 1500);
            }
        });
        function closeTutorial() {
            localStorage.setItem('kemo_tutorial_seen', 'true');
            document.getElementById('tutorial-modal-overlay').classList.remove('active');
            document.getElementById('tutorial-modal').classList.remove('active');
        }

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        setInterval(() => {
            if(!slides.length) return;
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); 

        function isOfferExpired(countdownStr) {
            if(!countdownStr) return false;
            return new Date(countdownStr).getTime() <= new Date().getTime();
        }

        setInterval(() => {
            document.querySelectorAll('.countdown-timer').forEach(el => {
                if(el.classList.contains('ended')) return; 
                let endTime = new Date(el.getAttribute('data-time')).getTime();
                let now = new Date().getTime(); let distance = endTime - now;
                if (distance <= 0) { 
                    el.innerHTML = "لقد انتهى العرض ❌"; 
                    el.classList.add('ended'); 
                    renderProducts(); 
                    return; 
                }
                let d = Math.floor(distance / (1000 * 60 * 60 * 24));
                let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let s = Math.floor((distance % (1000 * 60)) / 1000);
                el.innerHTML = `<span>${s}ث</span><span>${m}د</span><span>${h}س</span><span>${d}ي</span>`;
            });
        }, 1000);

        const randomArabicNames =["أحمد", "محمد", "محمود", "كريم", "علي", "يوسف", "عمر", "خالد", "مصطفى", "زياد", "طارق", "حسن", "إبراهيم", "حسام", "ياسين", "عمار", "سيف"];
        function showLivePurchase() {
            if(!products || products.length === 0) return;
            const activeProducts = products.filter(p => p.isActive !== false);
            if(activeProducts.length === 0) return;
            const randomProduct = activeProducts[Math.floor(Math.random() * activeProducts.length)];
            const randomName = randomArabicNames[Math.floor(Math.random() * randomArabicNames.length)];
            document.getElementById('live-popup-img').src = randomProduct.image;
            document.getElementById('live-popup-name').innerText = randomName;
            document.getElementById('live-popup-prod').innerText = randomProduct.name;
            const popup = document.getElementById('live-purchase-popup');
            popup.classList.add('show');
            setTimeout(() => { popup.classList.remove('show'); }, 5000);
        }
        function scheduleNextPopup() { const randomDelay = Math.floor(Math.random() * (90000 - 35000 + 1)) + 35000; setTimeout(() => { showLivePurchase(); scheduleNextPopup(); }, randomDelay); }
        setTimeout(() => { showLivePurchase(); scheduleNextPopup(); }, 12000);

        const firebaseConfig = {
            apiKey: "AIzaSyAxAGDNo9cRiYVjUopaiWo4K4ylUG8tiG0",
            authDomain: "kemo-store-daf94.firebaseapp.com",
            databaseURL: "https://kemo-store-daf94-default-rtdb.europe-west1.firebasedatabase.app", 
            projectId: "kemo-store-daf94",
            storageBucket: "kemo-store-daf94.firebasestorage.app"
        };
        
        if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
        const db = firebase.database(); const auth = firebase.auth(); const provider = new firebase.auth.GoogleAuthProvider();

        const ADMIN_EMAIL = "kareemammar2025@gmail.com".toLowerCase(); 
        const whatsappNumber = "201115168017";
        
        let cart = JSON.parse(localStorage.getItem('kemo_cart')) ||[], likes = (JSON.parse(localStorage.getItem('kemo_likes')) ||[]).map(String);
        let currentFilter = 'all', uploadedImageData = "", currentUser = null, isAdmin = false;
        let tempUserResult = null; let currentShareProduct = null; let adminCurrentOrderFilter = 'all';
        let allRatings = {}; let statsResetTime = 0;
        
        let appliedCouponObj = null; 
        let isAuthProcessing = false;

        function showToast(msg, isError=false) {
            const t = document.getElementById("toast"); t.innerHTML = msg; t.style.borderColor = isError?"var(--danger)":"var(--primary)";
            t.className = "show"; setTimeout(() => t.className = t.className.replace("show",""), 3000);
        }

        db.ref('kemo_ratings').on('value', snap => { allRatings = snap.val() || {}; renderProducts(); if(currentShareProduct) renderReviewsList(currentShareProduct.id); });

        db.ref('kemo_settings/stats_reset').on('value', snap => {
            let val = snap.val(); let now = new Date(); let firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
            if(!val || val < firstOfMonth) { db.ref('kemo_settings/stats_reset').set(firstOfMonth); statsResetTime = firstOfMonth; } else { statsResetTime = val; }
            if(isAdmin) updateAdminDashboard();
        });

        db.ref('kemo_categories').on('value', snap => { categories = snap.val()||[]; renderCategoriesUI(); });
        
        db.ref('kemo_products').on('value', snap => { 
            products = snap.val()||[]; 
            renderProducts(); 
            renderCart(); 
            renderWishlist();
            if(isAdmin) renderCouponProducts(); 
        });
        
        db.ref('kemo_coupons').on('value', snap => { coupons = snap.val() ? Object.values(snap.val()) :[]; if(isAdmin) renderAdminCoupons(); });
        db.ref('kemo_orders').on('value', snap => { 
            if(snap.val()) { allOrders = Object.values(snap.val()).filter(o => o && o.id && String(o.id) !== 'undefined').sort((a,b)=>b.timestamp-a.timestamp); } else { allOrders =[]; }
            if(currentUser) renderUserOrders(); 
            if(isAdmin) { updateAdminDashboard(); let searchBox = document.getElementById('admin-order-search'); if (searchBox && searchBox.value.trim() !== '') searchOrders(); else filterAdminOrders(adminCurrentOrderFilter); }
        });

        function handleAuth(actionType) { 
            isAuthProcessing = true; 
            
            auth.signInWithPopup(provider).then((result) => { 
                db.ref(`kemo_users/${result.user.uid}/registered`).once('value').then(snap => {
                    const isRegistered = snap.exists();

                    if (actionType === 'login') {
                        if (!isRegistered) {
                            result.user.delete().catch(()=>{});
                            auth.signOut().then(() => {
                                isAuthProcessing = false;
                                updateUIForLogOut();
                                showToast("هذا الحساب غير مسجل! من فضلك اضغط على 'حساب جديد'.", true);
                            });
                        } else {
                            isAuthProcessing = false;
                            updateUIForLogIn(result.user);
                            finalizeLoginSuccess(result, false);
                        }
                    } 
                    else if (actionType === 'signup') {
                        if (isRegistered) {
                            auth.signOut().then(() => {
                                isAuthProcessing = false;
                                updateUIForLogOut();
                                showToast("أنت تمتلك حساباً بالفعل! من فضلك اضغط على 'تسجيل الدخول'.", true);
                            });
                        } else {
                            db.ref(`kemo_users/${result.user.uid}/registered`).set(true);
                            isAuthProcessing = false;
                            updateUIForLogIn(result.user);
                            finalizeLoginSuccess(result, true);
                        }
                    }
                });
            }).catch(e => {
                isAuthProcessing = false;
                if(e.code !== 'auth/popup-closed-by-user') { showToast(e.message, true); }
            }); 
        }

        function finalizeLoginSuccess(result, isNewUser) {
            localStorage.setItem('kemo_is_logged_in', 'true');

            if (isNewUser) { 
                tempUserResult = result; 
                document.getElementById('name-modal-overlay').classList.add('active'); 
                document.getElementById('name-modal').classList.add('active'); 
            } else { 
                showToast("تم تسجيل الدخول بنجاح"); 
            }
        }

        function updateUIForLogIn(user) {
            currentUser = user;
            isAdmin = (user.email.toLowerCase() === ADMIN_EMAIL);
            const uArea = document.getElementById('user-area');
            
            uArea.innerHTML = `<div class="user-profile"><img src="${user.photoURL}"><span>${user.displayName ? user.displayName.split(' ')[0] : 'مستخدم'}</span><button class="btn-logout-small" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></button></div>`;
            renderCart();

            const btnAdmin = document.getElementById('btn-admin-nav');
            btnAdmin.style.display = isAdmin ? 'inline-block' : 'none'; 
            renderUserOrders(); 
            if(isAdmin) { renderAdminCoupons(); updateAdminDashboard(); renderCouponProducts(); }
        }

        function updateUIForLogOut() {
            currentUser = null;
            isAdmin = false;
            const uArea = document.getElementById('user-area');
            uArea.innerHTML = `<button class="btn-google" onclick="handleAuth('login')">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                <span>سجل دخولك</span>
            </button>`;
            document.getElementById('btn-admin-nav').style.display = 'none'; 
            document.getElementById('user-orders-list').innerHTML = '<div style="text-align:center; color:var(--text-muted);">سجل الدخول لرؤية طلباتك</div>';
        }

        function saveNewUserName() { 
            let customName = document.getElementById('new-user-name-input').value.trim(); 
            if (!customName) return showToast("يجب كتابة اسمك للمتابعة!", true); 
            tempUserResult.user.updateProfile({ displayName: customName }).then(() => { 
                currentUser.displayName = customName; 
                document.getElementById('name-modal-overlay').classList.remove('active'); 
                document.getElementById('name-modal').classList.remove('active'); 
                showToast("تم التسجيل والدخول بنجاح"); 
                const userProfileSpan = document.querySelector('.user-profile span'); 
                if(userProfileSpan) userProfileSpan.innerText = customName.split(' ')[0]; 
            }); 
        }
        
        function logout() { 
            auth.signOut().then(()=>{ 
                localStorage.removeItem('kemo_is_logged_in'); 
                showToast("تم الخروج"); 
                switchTab('store'); 
            }); 
        }

        auth.onAuthStateChanged(user => {
            if(isAuthProcessing) return;
            if(user) {
                localStorage.setItem('kemo_is_logged_in', 'true');
                updateUIForLogIn(user);
            } else {
                updateUIForLogOut();
            }
        });

        function openSidebar(id) { closeAllSidebars(); document.getElementById(id).classList.add('active'); document.getElementById('main-overlay').classList.add('active'); }
        function closeAllSidebars() { document.querySelectorAll('.side-panel').forEach(p=>p.classList.remove('active')); document.getElementById('main-overlay').classList.remove('active'); }

        function shareProduct() {
            if(!currentShareProduct) return;
            const text = `🔥 شوف العرض الجامد ده من Kemo Store\n🎮 ${currentShareProduct.name}\n💰 بسعر: ${currentShareProduct.price} ج.م\n🚀 اشحن دلوقتي من هنا:\n${window.location.href}`;
            if (navigator.share) { navigator.share({ title: currentShareProduct.name, text: text, url: window.location.href }).catch(console.error); } 
            else { navigator.clipboard.writeText(text); showToast("تم نسخ الرابط والعرض! شاركه مع أصدقائك."); }
        }

        function getProductRating(productId) {
            let pRatings = allRatings[productId];
            if(!pRatings) return { avg: 5, total: 0 };
            let values = Object.values(pRatings).map(r => r.stars || r); 
            if(values.length === 0) return { avg: 5, total: 0 };
            let sum = values.reduce((a, b) => a + b, 0);
            return { avg: (sum / values.length).toFixed(1), total: values.length };
        }

        function submitRating(productId, stars) {
            if(!currentUser) { showToast("سجل دخول أولاً لتقييم المنتج!", true); return handleAuth('login'); }
            let existingReview = allRatings[productId]?.[currentUser.uid]?.text || "";
            let obj = { stars: stars, text: existingReview, name: currentUser.displayName, date: Date.now() };
            db.ref(`kemo_ratings/${productId}/${currentUser.uid}`).set(obj).then(() => { showToast("شكراً لتقييمك!"); buildInteractiveStars(productId); });
        }

        function submitReviewText() {
            if(!currentUser) { showToast("سجل دخول أولاً!", true); return handleAuth('login'); }
            if(!currentShareProduct) return;
            let text = document.getElementById('review-input-text').value.trim();
            if(!text) return showToast("يرجى كتابة تعليق", true);
            let userStars = allRatings[currentShareProduct.id]?.[currentUser.uid]?.stars || 5;
            let obj = { stars: userStars, text: text, name: currentUser.displayName, date: Date.now() };
            db.ref(`kemo_ratings/${currentShareProduct.id}/${currentUser.uid}`).set(obj).then(() => { document.getElementById('review-input-text').value = ''; showToast("تم إضافة تعليقك بنجاح وسيكون مرئياً للجميع"); renderReviewsList(currentShareProduct.id); });
        }

        function buildInteractiveStars(productId) {
            let userData = (currentUser && allRatings[productId]) ? allRatings[productId][currentUser.uid] : null;
            let userRating = userData ? (userData.stars || userData) : 0;
            let ratingData = getProductRating(productId);
            let html = '';
            for(let i=5; i>=1; i--) { let activeClass = (i <= userRating) ? 'active' : ''; html += `<button class="star-btn ${activeClass}" onclick="submitRating('${productId}', ${i})"><i class="fa-solid fa-star"></i></button>`; }
            document.getElementById('interactive-stars').innerHTML = html; document.getElementById('rating-text-info').innerText = `التقييم: ${ratingData.avg} من 5 (${ratingData.total} تقييمات)`;
        }

        function renderReviewsList(productId) {
            let cont = document.getElementById('product-reviews-list');
            let pRatings = allRatings[productId]; let html = '';
            if(!pRatings) { cont.innerHTML = '<div style="color:gray; font-size:11px; text-align:center;">لا توجد تعليقات حتى الآن. كن أول من يعلق!</div>'; return; }
            let reviews = Object.values(pRatings).filter(r => r.text && r.text.trim() !== "").sort((a,b)=>b.date-a.date);
            if(reviews.length === 0) { cont.innerHTML = '<div style="color:gray; font-size:11px; text-align:center;">توجد تقييمات بالنجوم فقط، أضف تعليقك!</div>'; return; }
            reviews.forEach(r => {
                let d = new Date(r.date).toLocaleDateString('ar-EG');
                let stars = '⭐'.repeat(r.stars);
                html += `<div class="review-card"><div class="review-header"><span>${r.name.split(' ')[0]} ${stars}</span><span>${d}</span></div><div class="review-text">${r.text}</div></div>`;
            });
            cont.innerHTML = html;
        }

        function renderRelatedProducts(p) {
            let related = products.filter(x => x.category === p.category && x.id !== p.id && x.isActive !== false).slice(0, 5);
            let relHtml = '';
            related.forEach(r => {
                relHtml += `<div class="related-item" onclick="showProductDetails('${r.id}')"><img src="${r.image}"><div class="related-item-title">${r.name}</div><div style="font-size:10px; color:var(--primary); font-weight:bold;">${r.price} ج.م</div></div>`;
            });
            document.getElementById('related-products-list').innerHTML = relHtml || '<div style="color:gray; font-size:11px; width:100%; text-align:center;">لا توجد عروض أخرى مشابهة حالياً.</div>';
        }

        function showProductDetails(id) {
            const p = products.find(x => String(x.id) === String(id)); if(!p) return;
            currentShareProduct = p;
            document.getElementById('details-img').src = p.image;
            document.getElementById('details-title').innerText = p.name;
            document.getElementById('details-price').innerHTML = (p.oldPrice ? `<span class="old-price" style="font-size:14px; color:var(--text-muted); text-decoration:line-through;">${p.oldPrice}</span> ` : '') + p.price + ' ج.م';
            document.getElementById('details-desc').innerText = p.details || 'لا توجد تفاصيل إضافية مكتوبة لهذا المنتج.';
            
            buildInteractiveStars(p.id);
            renderReviewsList(p.id);
            renderRelatedProducts(p);

            let isExpired = isOfferExpired(p.countdown);
            let timerCont = document.getElementById('details-timer-container');
            if(p.countdown) { if(isExpired) timerCont.innerHTML = `<div class="countdown-timer ended">لقد انتهى العرض ❌</div>`; else timerCont.innerHTML = `<div class="countdown-timer" data-time="${p.countdown}">يتم حساب الوقت...</div>`; } else timerCont.innerHTML = '';

            let stockHTML = ''; let buyBtn = document.getElementById('details-buy-btn');
            
            if(isExpired) {
                stockHTML = `<span class="stock-warning" style="font-size:14px;">نفذ الوقت المخصص للعرض ❌</span>`;
                buyBtn.disabled = true; buyBtn.innerText = "انتهى العرض"; buyBtn.style.background = "var(--border-color)"; buyBtn.style.color = "var(--text-muted)"; buyBtn.onclick = null;
            } else {
                if(p.stock !== undefined && p.stock !== '') {
                    let s = parseInt(p.stock);
                    if(s <= 0) {
                        stockHTML = `<span class="stock-warning" style="font-size:14px;">نفذت الكمية ❌</span>`;
                        buyBtn.disabled = true; buyBtn.innerText = "غير متوفر"; buyBtn.style.background = "var(--border-color)"; buyBtn.style.color = "var(--text-muted)"; buyBtn.onclick = null;
                    } else {
                        if(s < 10) stockHTML = `<span class="stock-warning" style="font-size:14px;">⚠️ قربت تخلص (باقي ${s})</span>`; else stockHTML = `<span style="color:var(--success); font-weight:bold; font-size:14px;">متوفر في المخزون ✅</span>`;
                        buyBtn.disabled = false; buyBtn.innerHTML = 'شحن الآن <i class="fa-solid fa-cart-plus"></i>'; buyBtn.style.background = "var(--primary)"; buyBtn.style.color = "#000"; buyBtn.onclick = (e) => { addToCart(p.id, e); closeDetailsModal(); };
                    }
                } else {
                    buyBtn.disabled = false; buyBtn.innerHTML = 'شحن الآن <i class="fa-solid fa-cart-plus"></i>'; buyBtn.style.background = "var(--primary)"; buyBtn.style.color = "#000"; buyBtn.onclick = (e) => { addToCart(p.id, e); closeDetailsModal(); };
                }
            }
            document.getElementById('details-stock').innerHTML = stockHTML;
            document.getElementById('details-modal-overlay').classList.add('active'); document.getElementById('details-modal').classList.add('active');
        }

        function closeDetailsModal() { document.getElementById('details-modal-overlay').classList.remove('active'); document.getElementById('details-modal').classList.remove('active'); }

        function toggleLike(id, event) {
            if (event) event.stopPropagation(); id = String(id);
            if (likes.includes(id)) { likes = likes.filter(x => x !== id); showToast("تم الحذف من المفضلة"); } 
            else { likes.push(id); showToast("تمت الإضافة للمفضلة"); }
            localStorage.setItem('kemo_likes', JSON.stringify(likes)); renderWishlist(); renderProducts();
        }

        function renderWishlist() {
            const cont = document.getElementById('wishlist-items'); let html = '';
            let likedProducts = products.filter(p => likes.includes(String(p.id)));
            if(!likedProducts.length) { html = '<div style="text-align:center; color:var(--text-muted);">المفضلة فارغة</div>'; }
            else { likedProducts.forEach(p => { html += `<div class="cart-item"><img src="${p.image}"><div class="cart-item-details"><div class="cart-item-title">${p.name}</div><div style="color:var(--primary); font-weight:bold;">${p.price} ج.م</div><button class="btn btn-cart" style="padding: 5px; margin-top: 5px; font-size: 12px; width: max-content;" onclick="addToCart('${p.id}')">نقل للسلة</button></div></div>`; }); }
            cont.innerHTML = html;
        }

        function applyCoupon() {
            let code = document.getElementById('promo-code').value.trim(); let c = coupons.find(x => x.code === code); let msgBox = document.getElementById('coupon-msg');
            if(!code) { appliedCouponObj = null; msgBox.innerText = ""; renderCart(); return; }
            if(!c) { msgBox.innerText = "كود غير صحيح ❌"; msgBox.style.color = "var(--danger)"; appliedCouponObj = null; }
            else if (c.uses <= 0) { msgBox.innerText = "تم انتهاء صلاحية الكود ❌"; msgBox.style.color = "var(--danger)"; appliedCouponObj = null; }
            else { 
                appliedCouponObj = c; 
            }
            renderCart();
        }

        function renderCouponProducts() {
            const cont = document.getElementById('coupon-products-checkboxes');
            if(!cont || !isAdmin) return;
            let html = '';
            let activeProducts = products.filter(p => p.isActive !== false);
            activeProducts.forEach(p => {
                html += `
                <label style="display:flex; align-items:center; gap:10px; color:var(--text-main); font-size:12px; cursor:pointer; background:var(--bg-card); padding:8px; border-radius:8px; border:1px solid var(--border-color);">
                    <input type="checkbox" class="coupon-prod-cb" value="${p.id}" style="width:18px; height:18px; cursor:pointer; accent-color:var(--primary);">
                    <img src="${p.image}" style="width:30px; height:30px; border-radius:4px; object-fit:contain; background:#000;">
                    <span style="flex:1;">${p.name}</span>
                    <span style="color:var(--primary); font-weight:bold;">${p.price} ج.م</span>
                </label>`;
            });
            cont.innerHTML = html || '<div style="color:gray; font-size:12px; text-align:center;">لا توجد منتجات حالياً</div>';
        }

        function addCoupon() {
            if(!isAdmin) return;
            const code = document.getElementById('c-code').value.trim().toUpperCase(); 
            const percent = parseInt(document.getElementById('c-percent').value); 
            const uses = parseInt(document.getElementById('c-uses').value);
            
            let allowedArr = [];
            document.querySelectorAll('.coupon-prod-cb:checked').forEach(cb => { allowedArr.push(cb.value); });
            const allowedProducts = allowedArr.join(',');

            if(!code || !percent || !uses) return showToast("أكمل بيانات الكوبون", true);
            const newC = { id: Date.now().toString(), code: code, percent: percent, uses: uses, allowedProducts: allowedProducts };
            db.ref('kemo_coupons/'+newC.id).set(newC).then(()=>{ 
                showToast("تم إضافة الكود بنجاح"); 
                document.getElementById('c-code').value=''; document.getElementById('c-percent').value=''; document.getElementById('c-uses').value=''; 
                document.querySelectorAll('.coupon-prod-cb').forEach(cb => cb.checked = false);
            });
        }

        function renderAdminCoupons() {
            const cont = document.getElementById('admin-coupons-list'); let html = '';
            coupons.forEach(c => { 
                let allowedText = c.allowedProducts ? `مخصص لمنتجات محددة (${c.allowedProducts.split(',').length} منتجات)` : 'لكل المنتجات';
                html += `<span style="background:var(--bg-card); padding:8px 15px; border-radius:10px; border:1px solid var(--primary); display:flex; flex-direction:column; gap:5px; align-items:start; font-size:12px;">
                    <div><b>${c.code}</b> (${c.percent}%) - متبقي: ${c.uses} <i class="fa-solid fa-trash" style="color:var(--danger); cursor:pointer; margin-right: 5px;" onclick="deleteCoupon('${c.id}')"></i></div>
                    <div style="font-size:10px; color:var(--text-muted);">${allowedText}</div>
                </span>`; 
            });
            cont.innerHTML = html;
        }
        function deleteCoupon(id) { if(confirm("حذف الكوبون؟")) db.ref('kemo_coupons/'+id).remove(); }

        function addToCart(id, event) {
            if (event) event.stopPropagation(); const p = products.find(x => String(x.id) === String(id)); if(!p) return;
            if(isOfferExpired(p.countdown)) return showToast("لقد انتهى العرض ولا يمكن إضافة المنتج للسلة", true);
            if(p.stock && parseInt(p.stock) <= 0) return showToast("الكمية غير متوفرة", true);
            
            const ex = cart.find(x => String(x.id) === String(id)); 
            if(ex) ex.qty++; else cart.push({id:p.id, name:p.name, price:p.price, costPrice: p.costPrice || 0, image:p.image, waMessage:p.waMessage||'', qty:1});
            saveCart(); showToast("أضيف للسلة");
        }
        function updateCartQty(id, ch) { const it = cart.find(x => String(x.id) === String(id)); if(it){ it.qty += ch; if(it.qty <= 0) cart = cart.filter(x => String(x.id) !== String(id)); saveCart(); } }
        function removeFromCart(id) { cart = cart.filter(x => String(x.id) !== String(id)); saveCart(); showToast("تم حذف المنتج من السلة", true); }
        function saveCart() { localStorage.setItem('kemo_cart', JSON.stringify(cart)); renderCart(); }

        function renderCart() {
            const cont = document.getElementById('cart-items'); let subTotal=0, cnt=0; let html = '';
            let discountValue = 0; let couponValid = true;

            if(!cart.length) html = '<div style="text-align:center; color:var(--text-muted);">السلة فارغة</div>';
            else cart.forEach(it => {
                let itTotal = it.price * it.qty;
                subTotal += itTotal; cnt += it.qty;

                let itemDiscount = 0;
                if(appliedCouponObj) {
                    let isAllowed = true;
                    if(appliedCouponObj.allowedProducts && appliedCouponObj.allowedProducts.trim() !== "") {
                        let allowedArr = appliedCouponObj.allowedProducts.split(',').map(x=>x.trim());
                        if(!allowedArr.includes(String(it.id))) isAllowed = false;
                    }
                    if(isAllowed) {
                        let singleDiscount = it.price * (appliedCouponObj.percent / 100);
                        let finalPrice = it.price - singleDiscount;
                        
                        let pCost = 0;
                        let fullP = products.find(x => String(x.id) === String(it.id));
                        if(fullP && fullP.costPrice) pCost = Number(fullP.costPrice);

                        if(finalPrice <= pCost) { 
                            couponValid = false; 
                        } else { 
                            itemDiscount = singleDiscount * it.qty; 
                        }
                    }
                }
                discountValue += itemDiscount;

                html += `<div class="cart-item"><img src="${it.image}"><div class="cart-item-details"><div class="cart-item-title">${it.name}</div><div style="color:var(--primary); font-weight:bold;">${it.price} ج.م</div><div class="qty-controls"><button class="qty-btn" onclick="updateCartQty('${it.id}', 1)">+</button><span>${it.qty}</span><button class="qty-btn" onclick="updateCartQty('${it.id}', -1)">-</button></div></div><button class="cart-item-delete" onclick="removeFromCart('${it.id}')" title="حذف المنتج من السلة"><i class="fa-solid fa-trash"></i></button></div>`;
            });
            cont.innerHTML = html; 

            let msgBox = document.getElementById('coupon-msg');
            if (appliedCouponObj) {
                if (!couponValid) {
                    appliedCouponObj = null; discountValue = 0;
                    msgBox.innerText = "تم انتهاء صلاحية الكود ❌"; msgBox.style.color = "var(--danger)";
                } else if (discountValue > 0) {
                    msgBox.innerText = `تم تطبيق خصم ${appliedCouponObj.percent}% بنجاح! ✅`; msgBox.style.color = "var(--success)";
                } else {
                    appliedCouponObj = null; discountValue = 0;
                    msgBox.innerText = "الكود لا يشمل المنتجات الموجودة بالسلة ❌"; msgBox.style.color = "var(--danger)";
                }
            }

            let finalTotal = subTotal - discountValue; 
            document.getElementById('cart-total-price').innerText = Math.round(finalTotal); document.getElementById('cart-badge-count').innerText = cnt;
        }

        function checkoutWhatsApp() {
            if(!currentUser) { showToast("سجل دخول أولاً!",true); return handleAuth('login'); }
            if(!cart.length) return showToast("السلة فارغة",true);
            
            const pId = document.getElementById('customer-game-id').value.trim(); 
            if(!pId) return showToast("اكتب الـ ID",true);
            if(pId.length < 10) return showToast("عفواً، يجب أن يتكون الـ ID من 10 أرقام على الأقل", true);

            const cPhone = document.getElementById('customer-phone').value.trim(); 
            if(!cPhone) return showToast("يرجى كتابة رقم الواتساب", true);

            const orderId = 'KEMO-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 10);
            let finalTotal = parseInt(document.getElementById('cart-total-price').innerText);
            const now = new Date(); const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
            const fullDateTime = `${now.toLocaleDateString('ar-EG', dateOptions)} - الساعة ${now.toLocaleTimeString('ar-EG')}`;

            const userEmail = currentUser.email || 'غير متوفر';

            const order = { id: orderId, uid: currentUser.uid, userName: currentUser.displayName || 'عميل', email: userEmail, phone: cPhone, playerId: pId, items: cart, total: finalTotal, status: 'pending', timestamp: Date.now(), dateStr: fullDateTime };

            let msg = `مرحباً Kemo Store 👋\nأريد شحن المنتجات التالية:\n\n📅 *تاريخ الطلب:* ${fullDateTime}\n\n👤 *معلومات المشتري:*\n   الاسم: ${order.userName}\n   رقم التواصل: ${order.phone}\n   البريد: ${userEmail}\n\n🎮 *معلومات اللعبة:*\n   الـ ID / الحساب: *${pId}*\n\n📦 *تفاصيل الشحنة:*\n`;
            
            cart.forEach((it, i) => { let itTotal = it.price * it.qty; msg += `${i+1}- *${it.name}*\n   الكمية: ${it.qty} | السعر: ${itTotal} ج.م\n`; if(it.waMessage) msg += `   💬: ${it.waMessage}\n`; });
            msg += `\n💰 *الإجمالي الكلي:* ${finalTotal} ج.م\n`; 
            if(appliedCouponObj) msg += `🎁 (تم تطبيق كود خصم ${appliedCouponObj.code})\n`; 
            msg += `\nبرجاء تأكيد الشحن معي. (رقم الطلب: #${orderId})`;

            const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

            let code = document.getElementById('promo-code').value.trim(); 
            if(code && appliedCouponObj) { 
                let c = coupons.find(x => x.code === code); 
                if(c) db.ref('kemo_coupons/'+c.id).update({uses: c.uses - 1}).catch(()=>{}); 
            }

            let updatedProducts = [...products]; 
            cart.forEach(cartItem => { 
                let pIndex = updatedProducts.findIndex(p => String(p.id) === String(cartItem.id)); 
                if(pIndex !== -1 && updatedProducts[pIndex].stock !== undefined && updatedProducts[pIndex].stock !== '') { 
                    let currentStock = parseInt(updatedProducts[pIndex].stock); 
                    let newStock = currentStock - cartItem.qty; 
                    updatedProducts[pIndex].stock = newStock < 0 ? 0 : newStock; 
                } 
            });

            db.ref('kemo_orders/' + orderId).set(order);
            db.ref('kemo_products').set(updatedProducts);

            finishCheckout(waLink);
        }

        function finishCheckout(waLink) {
            cart=[]; appliedCouponObj=null; 
            document.getElementById('promo-code').value=''; 
            document.getElementById('coupon-msg').innerText=''; 
            saveCart(); 
            closeAllSidebars(); 
            
            window.location.href = waLink;
        }

        function renderUserOrders() {
            const cont = document.getElementById('user-orders-list'); let html=''; const myO = allOrders.filter(o=>o.uid === currentUser.uid);
            if(!myO.length) html='<div style="text-align:center; color:gray;">لا توجد طلبات</div>';
            else myO.forEach(o => {
                let badge = ''; let trackerHtml = '';
                if(o.status === 'pending') { badge = `<span class="badge-pending">جاري المراجعة ⏳</span>`; trackerHtml = `<div class="order-tracker"><div class="tracker-step active"><div class="step-icon"><i class="fa-solid fa-hourglass-half"></i></div>قيد المراجعة</div><div class="tracker-step"><div class="step-icon"><i class="fa-solid fa-truck"></i></div>جاري الشحن</div><div class="tracker-step"><div class="step-icon"><i class="fa-solid fa-check"></i></div>تم التسليم</div></div>`; }
                else if(o.status === 'completed') { badge = `<span class="badge-completed">تم الشحن ✅</span>`; trackerHtml = `<div class="order-tracker"><div class="tracker-step done"><div class="step-icon"><i class="fa-solid fa-check"></i></div>تمت المراجعة</div><div class="tracker-step done"><div class="step-icon"><i class="fa-solid fa-check"></i></div>شحن</div><div class="tracker-step done"><div class="step-icon"><i class="fa-solid fa-check-double"></i></div>اكتمل</div></div>`; }
                else if(o.status === 'rejected') { badge = `<span class="badge-rejected">مرفوض ❌</span>`; trackerHtml = `<div class="order-tracker"><div class="tracker-step done"><div class="step-icon"><i class="fa-solid fa-check"></i></div>استلام الطلب</div><div class="tracker-step rejected" style="width:66%"><div class="step-icon"><i class="fa-solid fa-xmark"></i></div>تم الإلغاء/الرفض</div></div>`; }
                html += `<div class="order-card"><div class="order-header"><span>#${o.id}</span>${badge}</div><div style="font-size:12px; color:gray;">الـ ID: ${o.playerId}</div><div style="font-weight:bold; color:var(--primary); margin-top:5px;">الإجمالي: ${o.total} ج.م</div><div style="font-size:11px; color:var(--text-muted); margin-top:5px;"><i class="fa-regular fa-clock"></i> ${o.dateStr || new Date(o.timestamp).toLocaleDateString('ar-EG')}</div>${trackerHtml}</div>`;
            });
            cont.innerHTML = html;
        }

        function manualResetStats() { if(confirm("تحذير: هل أنت متأكد من تصفير إحصائيات الأرباح والطلبات للبدء من جديد؟")) { db.ref('kemo_settings/stats_reset').set(Date.now()); showToast("تم تصفير الإحصائيات بنجاح"); } }

        function updateAdminDashboard() {
            let totalRevenue = 0, totalNetProfit = 0, pendingCount = 0, completedCount = 0; 
            let recentOrders = allOrders.filter(o => o.timestamp >= statsResetTime);
            
            recentOrders.forEach(o => { 
                if(o.status === 'completed') { 
                    totalRevenue += Number(o.total); 
                    let orderCost = 0;
                    if(o.items && o.items.length) {
                        o.items.forEach(item => {
                            let cost = item.costPrice;
                            if(cost === undefined) {
                                let currentP = products.find(p => String(p.id) === String(item.id));
                                cost = currentP ? (currentP.costPrice || 0) : 0;
                            }
                            orderCost += (Number(cost) * item.qty);
                        });
                    }
                    totalNetProfit += (Number(o.total) - orderCost);
                    completedCount++; 
                } 
                if(o.status === 'pending') pendingCount++; 
            });
            
            document.getElementById('stat-revenue').innerText = totalRevenue + ' ج.م'; 
            document.getElementById('stat-net-profit').innerText = totalNetProfit + ' ج.م';
            document.getElementById('stat-pending').innerText = pendingCount; 
            document.getElementById('stat-completed').innerText = completedCount;
        }

        function exportOrdersToExcel() {
            let list = adminCurrentOrderFilter === 'all' ? allOrders : allOrders.filter(o => o.status === adminCurrentOrderFilter);
            if(!list.length) return showToast("لا يوجد طلبات للتصدير", true);
            let csv = '\uFEFF'; 
            csv += "رقم الطلب,اسم العميل,رقم الواتساب,الـ ID,الإجمالي (ج.م),الحالة,التاريخ\n";
            list.forEach(o => {
                let statusAr = o.status==='pending'?'معلق':o.status==='completed'?'مكتمل':'مرفوض';
                let cleanPhone = o.phone ? o.phone.replace(/,/g, '') : "غير مسجل";
                let cleanName = o.userName ? o.userName.replace(/,/g, ' ') : "عميل";
                csv += `${o.id},${cleanName},${cleanPhone},${o.playerId},${o.total},${statusAr},${o.dateStr}\n`;
            });
            let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            let link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `KemoStore_Orders_${new Date().toISOString().split('T')[0]}.csv`; link.click();
        }

        function filterAdminOrders(status, btn=null) { adminCurrentOrderFilter = status; if(btn) { document.querySelectorAll('.admin-filters button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); } let filteredList = status === 'all' ? allOrders : allOrders.filter(o => o.status === status); renderAdminOrders(filteredList); }

        function renderAdminOrders(list = allOrders) {
            const cont = document.getElementById('admin-orders-list'); let html='';
            if(!list.length) html='<div style="color:gray; text-align:center; padding: 20px;">لا يوجد طلبات مطابقة</div>';
            else list.forEach(o => {
                let adminActions = ''; let lateIndicator = '';
                if(o.status === 'pending') {
                    let timePassed = Date.now() - o.timestamp;
                    if(timePassed > 900000) { lateIndicator = `<span class="badge-late">تأخير ⚠️</span>`; adminActions = `<button class="btn" style="background:var(--primary); color:#000; margin-bottom:10px; font-size:12px;" onclick="sendLateMessage('${o.id}')"><i class="fa-brands fa-whatsapp"></i> إرسال رسالة تأخير</button>`; }
                    adminActions += `<div style="display:flex; gap:10px; margin-top: 10px;"><button class="btn" style="background:var(--success); color:white; flex:1;" onclick="completeOrder('${o.id}')">تم الشحن ✅</button><button class="btn" style="background:var(--danger); color:white; flex:1;" onclick="rejectOrder('${o.id}')">إلغاء ❌</button></div>`;
                } else if(o.status === 'completed') { adminActions = `<div style="color:var(--success); font-weight:bold; text-align:center; margin-top: 10px;">تم شحن الطلب ✅</div>`; } 
                else if(o.status === 'rejected') { adminActions = `<div style="color:var(--danger); font-weight:bold; text-align:center; margin-top: 10px;">تم رفض الطلب ❌</div>`; }

                let deleteBtnHtml = `<button onclick="deleteSingleOrder('${o.id}')" style="position: absolute; top: 10px; left: 10px; background: transparent; border: none; color: var(--danger); font-size: 14px; cursor: pointer;"><i class="fa-solid fa-trash"></i></button>`;
                html += `<div class="order-card" style="background:var(--bg-card); position:relative;">${deleteBtnHtml}<div class="order-header"><div>${lateIndicator}<span style="color:var(--primary);">#${o.id}</span></div><span style="padding-left:25px;">${o.userName}</span></div><div style="font-size:13px; margin-bottom:10px;"><b>الرقم:</b> <a href="tel:${o.phone || ''}" style="color:var(--success); text-decoration:none;">${o.phone || 'غير مسجل'}</a><br><b>ID:</b> ${o.playerId} <br> <b>إجمالي:</b> ${o.total} ج.م <br> <b>التاريخ:</b> ${o.dateStr || new Date(o.timestamp).toLocaleDateString('ar-EG')}</div>${adminActions}</div>`;
            });
            cont.innerHTML = html;
        }

        function searchOrders() { let term = document.getElementById('admin-order-search').value.toLowerCase().replace(/[#\s]/g, ''); let filtered = allOrders.filter(o => { if (!o || !o.id) return false; let cleanId = String(o.id).toLowerCase().replace(/[#\s]/g, ''); let cleanPlayer = String(o.playerId || "").toLowerCase().replace(/[#\s]/g, ''); let cleanPhone = String(o.phone || "").replace(/[#\s]/g, ''); return cleanId.includes(term) || cleanPlayer.includes(term) || cleanPhone.includes(term); }); renderAdminOrders(filtered); }

        function deleteSingleOrder(id) { if(confirm("هل أنت متأكد من حذف هذا الطلب نهائياً من قاعدة البيانات؟")) { db.ref('kemo_orders/'+id).remove().then(() => showToast("تم حذف الطلب", true)); } }
        function deleteAllFilteredOrders() {
            let list = adminCurrentOrderFilter === 'all' ? allOrders : allOrders.filter(o => o.status === adminCurrentOrderFilter);
            if(list.length === 0) return showToast("لا يوجد طلبات لحذفها", true);
            let typeName = adminCurrentOrderFilter === 'all' ? 'جميع الطلبات' : adminCurrentOrderFilter === 'pending' ? 'الطلبات المعلقة' : adminCurrentOrderFilter === 'completed' ? 'الطلبات المكتملة' : 'الطلبات المرفوضة';
            if(confirm(`تحذير خطير: هل أنت متأكد من حذف (${list.length}) من ${typeName} نهائياً؟ لا يمكن التراجع عن هذا الإجراء.`)) { let updates = {}; list.forEach(o => updates[o.id] = null); db.ref('kemo_orders').update(updates).then(() => showToast("تم الحذف الجماعي بنجاح", true)); }
        }

        function completeOrder(id) { 
            if(confirm("تأكيد الشحن؟ سيتم فتح الواتساب لإبلاغ العميل.")) {
                const order = allOrders.find(o => String(o.id) === String(id));
                db.ref('kemo_orders/'+id).update({status:'completed'}).then(() => {
                    showToast("تم التحديث بنجاح");
                    if (order && order.phone) {
                        let msg = `مرحباً يا ${order.userName.split(' ')[0]} 👋\n\n✅ *تم اكتمال طلبك بنجاح!*\nتم شحن المنتجات لحسابك (ID: ${order.playerId})\nرقم الطلب: #${order.id}\n\nشكراً لثقتك في Kemo Store 🎮❤️`;
                        let formattedPhone = order.phone.startsWith('0') ? '2' + order.phone : order.phone;
                        window.location.href = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(msg)}`;
                    }
                });
            }
        }
        
        function rejectOrder(id) { 
            if(confirm("هل أنت متأكد من رفض وإلغاء هذا الطلب؟")) { 
                const order = allOrders.find(o => String(o.id) === String(id)); 
                db.ref('kemo_orders/'+id).update({status:'rejected'}).then(() => { 
                    showToast("تم رفض الطلب", true); 
                    if (order && order.phone) { 
                        let msg = `مرحباً يا ${order.userName.split(' ')[0]}\n\n❌ نأسف لإبلاغك بأنه *تم إلغاء طلبك* (رقم: #${order.id}).\n\nيرجى التواصل مع الدعم الفني لمعرفة السبب عبر هذا الرقم:\n+201115168017\n\nKemo Store 🎮`; 
                        let formattedPhone = order.phone.startsWith('0') ? '2' + order.phone : order.phone; 
                        window.location.href = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(msg)}`; 
                    } 
                }); 
            } 
        }
        
        function sendLateMessage(id) { const order = allOrders.find(o => String(o.id) === String(id)); if (order && order.phone) { let msg = `مرحباً يا ${order.userName.split(' ')[0]} 👋\n\nنعتذر عن التأخير البسيط في طلبك رقم (#${order.id}).\nالطلب حالياً قيد المراجعة وسوف يتم شحن (ID: ${order.playerId}) في أقرب وقت.\n\nKemo Store 🎮`; let formattedPhone = order.phone.startsWith('0') ? '2' + order.phone : order.phone; window.location.href = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(msg)}`; } }

        function renderCategoriesUI() { let cHtml = `<option value="none">بدون قسم</option>`, fHtml = `<button class="cat-btn active" onclick="filterCat('all',this)">الكل</button>`; categories.forEach(c => { cHtml+=`<option value="${c.name}">${c.name}</option>`; fHtml+=`<button class="cat-btn" onclick="filterCat('${c.name}',this)">${c.name}</button>`; }); cHtml+=`<option value="__NEW__">➕ قسم جديد...</option>`; document.getElementById('p-category').innerHTML = cHtml; document.getElementById('store-category-filter').innerHTML = fHtml; }
        function filterCat(cat, btn) { currentFilter = cat; document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderProducts(); }
        document.getElementById('p-image').addEventListener('change', e => { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = ev => { const img = new Image(); img.onload = () => { const cv = document.createElement('canvas'); const M = 500; let w = img.width, h = img.height; if(w>h){if(w>M){h*=M/w; w=M;}} else {if(h>M){w*=M/h; h=M;}} cv.width=w; cv.height=h; cv.getContext('2d').drawImage(img,0,0,w,h); uploadedImageData = cv.toDataURL('image/jpeg', 0.6); }; img.src = ev.target.result; }; r.readAsDataURL(f); });
        function checkNewCategory() { const catSelect = document.getElementById('p-category'); const newCatInput = document.getElementById('p-new-cat'); const deleteBtn = document.getElementById('btn-delete-cat'); if (catSelect.value === '__NEW__') { newCatInput.style.display = 'block'; if(deleteBtn) deleteBtn.style.display = 'none'; } else { newCatInput.style.display = 'none'; if(deleteBtn) deleteBtn.style.display = (catSelect.value !== 'none') ? 'block' : 'none'; } }
        function deleteSelectedCategory() { if(!isAdmin) return; const catSelect = document.getElementById('p-category'); const selectedName = catSelect.value; if (selectedName === 'none' || selectedName === '__NEW__') return; if (confirm(`هل أنت متأكد من حذف قسم "${selectedName}" نهائياً؟`)) { const updatedCategories = categories.filter(c => c.name !== selectedName); db.ref('kemo_categories').set(updatedCategories).then(() => { showToast("تم حذف القسم بنجاح"); catSelect.value = 'none'; checkNewCategory(); }).catch(err => showToast("حدث خطأ أثناء الحذف", true)); } }
        
        function saveProduct() { 
            if(!isAdmin) return; 
            const pid = document.getElementById('p-id').value, name = document.getElementById('p-name').value, price = document.getElementById('p-price').value; 
            const cost = document.getElementById('p-cost').value;
            const oldPrice = document.getElementById('p-old-price').value, badge = document.getElementById('p-badge').value, stock = document.getElementById('p-stock').value, msg = document.getElementById('p-msg').value, details = document.getElementById('p-details').value; 
            const countdown = document.getElementById('p-countdown').value; const isActive = document.getElementById('p-is-active').checked; 
            
            let cat = document.getElementById('p-category').value; 
            if(cat==='__NEW__'){ 
                const nc = document.getElementById('p-new-cat').value.trim(); 
                if(!nc) return showToast("اكتب اسم القسم",true); 
                cat = nc; db.ref('kemo_categories').set([...categories, {id:Date.now().toString(), name:nc}]); 
            } 
            if(!name || !price || (!uploadedImageData && !pid)) return showToast("أكمل البيانات",true); 
            
            const pObj = { 
                id: pid?Number(pid):Date.now(), category: cat, name: name, price: price, costPrice: cost ? Number(cost) : 0, 
                oldPrice: oldPrice, badge: badge, stock: stock, waMessage: msg, details: details, countdown: countdown, isActive: isActive 
            }; 
            
            if(uploadedImageData) pObj.image = uploadedImageData; else pObj.image = products.find(x=>String(x.id)===String(pid)).image; 
            let newList = pid ? products.map(x=>String(x.id)===String(pid)?pObj:x) :[...products, pObj]; 
            db.ref('kemo_products').set(newList).then(()=>{ showToast("تم الحفظ"); cancelEdit(); }); 
        }

        function editProduct(id) { 
            const p = products.find(x => String(x.id) === String(id)); if(!p) return; 
            document.getElementById('p-id').value = p.id; 
            document.getElementById('p-name').value = p.name; 
            document.getElementById('p-price').value = p.price; 
            document.getElementById('p-cost').value = p.costPrice || '';
            document.getElementById('p-old-price').value = p.oldPrice||''; 
            document.getElementById('p-badge').value = p.badge||''; 
            document.getElementById('p-stock').value = p.stock||''; 
            document.getElementById('p-msg').value = p.waMessage||''; 
            document.getElementById('p-details').value = p.details||''; 
            document.getElementById('p-category').value = p.category; 
            document.getElementById('p-countdown').value = p.countdown||''; 
            document.getElementById('p-is-active').checked = p.isActive !== false; 
            document.getElementById('add-btn').innerText = "تحديث المنتج"; 
            document.getElementById('cancel-edit-btn').style.display = "block"; 
            window.scrollTo(0, document.getElementById('admin-section').offsetTop); 
        }

        function toggleProductActive(id) { if(!isAdmin) return; let updatedProducts = [...products]; let pIndex = updatedProducts.findIndex(p => String(p.id) === String(id)); if(pIndex !== -1) { updatedProducts[pIndex].isActive = updatedProducts[pIndex].isActive === false ? true : false; db.ref('kemo_products').set(updatedProducts).then(()=>showToast(updatedProducts[pIndex].isActive ? "تم التفعيل" : "تم الإيقاف")); } }
        function cancelEdit() {['p-id','p-name','p-price','p-cost','p-old-price','p-badge','p-stock','p-msg','p-new-cat','p-details','p-countdown'].forEach(i=>document.getElementById(i).value=''); document.getElementById('p-is-active').checked=true; document.getElementById('p-category').value='none'; document.getElementById('p-image').value=''; uploadedImageData=""; document.getElementById('add-btn').innerText="حفظ ونشر"; document.getElementById('cancel-edit-btn').style.display="none"; }
        function deleteProduct(id) { if(confirm("حذف المنتج؟")) db.ref('kemo_products').set(products.filter(p=>String(p.id)!==String(id))); }
        function switchTab(t) { document.getElementById('store-section').style.display = t==='store'?'block':'none'; document.getElementById('admin-section').style.display = t==='admin'?'block':'none'; }

        function renderProducts() {
            const st = document.getElementById('products-list'), ad = document.getElementById('admin-products-list'); let stHTML = '', adHTML = ''; 
            const searchInput = document.getElementById('customer-search-input'); const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
            let list = products.filter(p => p.isActive !== false); if(currentFilter !== 'all') list = list.filter(p=>p.category===currentFilter); if(searchTerm !== '') list = list.filter(p => p.name.toLowerCase().includes(searchTerm));
            
            if(!list.length) stHTML = '<div style="grid-column:1/-1; text-align:center; padding:30px 0; color:var(--text-muted);">لا توجد منتجات مطابقة لطلبك 💔</div>';
            else[...list].reverse().forEach(p => {
                let badgeHTML = p.badge ? `<div class="sale-badge">${p.badge}</div>` : '';
                let oldPriceHTML = p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : '';
                let isLiked = likes.includes(String(p.id)) ? 'liked' : '';
                let heartHTML = `<button class="like-btn ${isLiked}" onclick="toggleLike('${p.id}', event)"><i class="fa-solid fa-heart"></i></button>`;
                
                let isExpired = isOfferExpired(p.countdown); let expiredClass = isExpired ? 'expired' : ''; let countdownHTML = '';
                if(p.countdown) { if(isExpired) countdownHTML = `<div class="countdown-timer ended">لقد انتهى العرض ❌</div>`; else countdownHTML = `<div class="countdown-timer" data-time="${p.countdown}">يتم حساب الوقت...</div>`; }

                let rData = getProductRating(p.id); let starsHTML = `<div class="stars" style="font-size:10px; color:#fbbf24;">⭐ ${rData.avg} (${rData.total})</div>`;
                let stockHTML = '', btnHTML = '';
                
                if (isExpired) { btnHTML = `<button class="btn btn-cart" disabled onclick="event.stopPropagation()">انتهى العرض</button>`; } 
                else {
                    btnHTML = `<button class="btn btn-cart" onclick="addToCart('${p.id}', event)">شحن الآن</button>`;
                    if(p.stock !== undefined && p.stock !== '') { let s = parseInt(p.stock); if(s <= 0) { stockHTML = `<div class="stock-warning">نفذت الكمية ❌</div>`; btnHTML = `<button class="btn btn-cart" disabled onclick="event.stopPropagation()">غير متوفر</button>`; } else if (s < 10) { stockHTML = `<div class="stock-warning">⚠️ قربت تخلص (باقي ${s})</div>`; } }
                }

                stHTML += `<div class="product-card ${expiredClass}" onclick="showProductDetails('${p.id}')"><div class="product-img-wrapper">${badgeHTML}${heartHTML}<img src="${p.image}"></div><div class="product-info"><div class="product-title">${p.name}</div>${starsHTML}${countdownHTML}<div class="product-price">${oldPriceHTML} ${p.price} ج.م</div>${stockHTML}${btnHTML}</div></div>`;
            });
            st.innerHTML = stHTML; 

            if(products.length)[...products].reverse().forEach(p => {
                let stockInfo = p.stock !== undefined && p.stock !== '' ? `<div style="font-size:12px; color:var(--success);">المخزون: ${p.stock}</div>` : '';
                let profit = p.price - (p.costPrice || 0);
                stockInfo += `<div style="font-size:12px; color:var(--accent);">التكلفة: ${p.costPrice||0} | الربح: ${profit} ج.م</div>`;

                let activeClass = p.isActive === false ? 'inactive' : ''; let toggleBtnText = p.isActive === false ? '<i class="fa-solid fa-eye-slash"></i> مخفي' : '<i class="fa-solid fa-eye"></i> مفعل';
                adHTML += `<div class="product-card ${activeClass}"><div class="product-img-wrapper"><img src="${p.image}"></div><div class="product-info"><div class="product-title">${p.name}</div>${stockInfo}<div style="display:flex; gap:5px; margin-bottom: 5px; margin-top:5px;"><button class="btn btn-toggle" onclick="toggleProductActive('${p.id}')">${toggleBtnText}</button><button class="btn btn-edit" onclick="editProduct('${p.id}')">تعديل</button></div><button class="btn" style="background:rgba(239,68,68,0.1); color:var(--danger);" onclick="deleteProduct('${p.id}')">حذف نهائي</button></div></div>`;
            });
            ad.innerHTML = adHTML;
        }

        let welcomePlayed = false;
        function tryPlayWelcomeAudio() { if (welcomePlayed) return; const welcomeAudio = document.getElementById('welcome-audio'); if (welcomeAudio) { welcomeAudio.play().then(() => { welcomePlayed = true; removeAudioListeners(); }).catch(e => { console.log("في انتظار لمس الشاشة..."); }); } }
        function playOnInteraction() { if (welcomePlayed) return; const welcomeAudio = document.getElementById('welcome-audio'); if (welcomeAudio) { welcomeAudio.play().then(() => { welcomePlayed = true; removeAudioListeners(); }).catch(e => console.log(e)); } }
        function removeAudioListeners() { document.removeEventListener('click', playOnInteraction); document.removeEventListener('touchstart', playOnInteraction); document.removeEventListener('scroll', playOnInteraction); }
        window.addEventListener('load', tryPlayWelcomeAudio); document.addEventListener('click', playOnInteraction, { once: true }); document.addEventListener('touchstart', playOnInteraction, { once: true }); document.addEventListener('scroll', playOnInteraction, { once: true });
        
    </script>
</body>
</html>
